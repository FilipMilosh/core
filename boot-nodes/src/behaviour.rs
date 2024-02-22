use libp2p::autonat;
use libp2p::identify;
use libp2p::kad;
use libp2p::ping;
use libp2p::relay;
use libp2p::swarm::behaviour::toggle::Toggle;
use libp2p::swarm::{NetworkBehaviour, StreamProtocol};
use libp2p::{identity, Multiaddr, PeerId};
use std::str::FromStr;
use std::time::Duration;


const IPFS_PROTO_NAME: StreamProtocol = StreamProtocol::new("/ipfs/kad/1.0.0");

#[derive(NetworkBehaviour)]
pub(crate) struct Behaviour {
    relay: relay::Behaviour,
    ping: ping::Behaviour,
    identify: identify::Behaviour,
    pub(crate) kademlia: Toggle<kad::Behaviour<kad::store::MemoryStore>>,
    autonat: Toggle<autonat::Behaviour>,
}

impl Behaviour {
    pub(crate) fn new(
        pub_key: identity::PublicKey,
        enable_kademlia: bool,
        enable_autonat: bool,
    ) -> Self {
        let kademlia = if enable_kademlia {
            let mut kademlia_config = kad::Config::new(IPFS_PROTO_NAME);
            kademlia_config.set_record_ttl(Some(Duration::from_secs(0)));
            kademlia_config.set_provider_record_ttl(Some(Duration::from_secs(0)));
            let mut kademlia = kad::Behaviour::with_config(
                pub_key.to_peer_id(),
                kad::store::MemoryStore::new(pub_key.to_peer_id()),
                kademlia_config,
            );
            kademlia.bootstrap().unwrap();
            Some(kademlia)
        } else {
            None
        }
        .into();

        let autonat = if enable_autonat {
            Some(autonat::Behaviour::new(
                PeerId::from(pub_key.clone()),
                Default::default(),
            ))
        } else {
            None
        }
        .into();

        Self {
            relay: relay::Behaviour::new(PeerId::from(pub_key.clone()), Default::default()),
            ping: ping::Behaviour::new(ping::Config::new()),
            identify: identify::Behaviour::new(
                identify::Config::new("ipfs/0.1.0".to_string(), pub_key).with_agent_version(
                    format!("cali-boot-server/{}", env!("CARGO_PKG_VERSION")),
                ),
            ),
            kademlia,
            autonat,
        }
    }
}