/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  IAgentContext,
  IKeyManager,
  IIdentifier,
  IKey,
  IService,
} from '@veramo/core-types';
import {AbstractIdentifierProvider} from '@veramo/did-manager';
import {debug} from 'console';
import {DIDDocument} from 'did-resolver';

export class DhtDidProvider extends AbstractIdentifierProvider {
  private defaultKms: string;

  constructor (options: {defaultKms: string;}) {
    super();
    this.defaultKms = options.defaultKms;
  }

  override async createIdentifier(
    args: {kms?: string; alias?: string; options?: any;},
    context: IAgentContext<IKeyManager>,
  ): Promise<Omit<IIdentifier, 'provider'>> {
    const keyType = args.options?.keyType || 'Secp256k1';
    const key = await context.agent.keyManagerCreate({
      kms: args.kms || this.defaultKms,
      type: keyType,
    });

    const identifier: Omit<IIdentifier, 'provider'> = {
      did: 'did:cali:' + args.alias,
      controllerKeyId: key.kid,
      keys: [key],
      services: [],
    };
    debug('Created', identifier.did);
    return identifier;
  }
  override updateIdentifier?(
    _args: {
      did: string;
      document: Partial<DIDDocument>;
      options?: {[x: string]: any;};
    },
    _context: IAgentContext<IKeyManager>,
  ): Promise<IIdentifier> {
    debug('update identifier');
    throw new Error('Method not implemented.');
  }
  override deleteIdentifier(
    _args: IIdentifier,
    _context: IAgentContext<IKeyManager>,
  ): Promise<boolean> {
    debug('delete identifier');
    throw new Error('Method not implemented.');
  }
  override addKey(
    _args: {identifier: IIdentifier; key: IKey; options?: any;},
    _context: IAgentContext<IKeyManager>,
  ): Promise<any> {
    debug('add key');
    throw new Error('Method not implemented.');
  }
  override removeKey(
    _args: {identifier: IIdentifier; kid: string; options?: any;},
    _context: IAgentContext<IKeyManager>,
  ): Promise<any> {
    debug('remove key');
    throw new Error('Method not implemented.');
  }
  override addService(
    _args: {identifier: IIdentifier; service: IService; options?: any;},
    _context: IAgentContext<IKeyManager>,
  ): Promise<any> {
    debug('add service');
    throw new Error('Method not implemented.');
  }
  override removeService(
    _args: {identifier: IIdentifier; id: string; options?: any;},
    _context: IAgentContext<IKeyManager>,
  ): Promise<any> {
    debug('remove service');
    throw new Error('Method not implemented.');
  }
}
