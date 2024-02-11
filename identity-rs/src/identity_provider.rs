use libp2p::identity::PublicKey;
use multibase::{encode, Base};

use crate::types::{AlgorithmType, DidDocument, VerificationMethod};

#[derive(Debug)]
pub struct Authentication {
    pub algorithm: AlgorithmType,
    pub controller: Option<String>,
    pub public_key: PublicKey,
}

const DID_CALI_IDENTIFIER: &str = "did:cali:";

/// Create decentralized identity document based on provided public key
///  {
///   "id": "did:cali:12D3KooWLU42rBMLrzAyFg8CdpHiPcwJcVsKv9Wx9DtiT4QjPGGV",
///   "verificationMethod": [
///     {
///       "id": "did:cali:12D3KooWLU42rBMLrzAyFg8CdpHiPcwJcVsKv9Wx9DtiT4QjPGGV",
///       "type": "Ed25519",
///       "publicKeyMultibase": "zCovLVG4fQcqT8sDqj76uQuXtQU2LqABAf6X8vnDW36zAidisFK22Z5Ecm28apKb9Kg6ofRo",
///       "controller": "did:cali:12D3KooWLU42rBMLrzAyFg8CdpHiPcwJcVsKv9Wx9DtiT4QjPGGV"
///     }
///   ]
/// }
pub fn create_identity(authentication: Authentication) -> DidDocument {
    let public_key_id = authentication.public_key.to_peer_id();
    let multibase_encoded = encode(Base::Base58Btc, public_key_id.as_ref().to_bytes());

    let did = format!("{}{}", DID_CALI_IDENTIFIER, public_key_id);

    let verification_method: VerificationMethod = VerificationMethod {
        id: format!("{}#key1", did),
        algorithm_type: authentication.algorithm.to_string(),
        public_key_multibase: multibase_encoded,
        controller: authentication.controller.unwrap_or_else(|| did.clone()),
    };

    let did_document: DidDocument = DidDocument {
        id: did,
        verification_method: vec![verification_method],
    };
    //TODO store it
    did_document
}

#[allow(dead_code)]
pub async fn get_identifier(_did: String) -> Option<DidDocument> {
    //TODO fetch document per key from storage
    unimplemented!();
}

#[allow(dead_code)]
pub async fn update_identifier() {
    unimplemented!();
}

#[allow(dead_code)]
pub async fn delete_identifier() {
    unimplemented!();
}
