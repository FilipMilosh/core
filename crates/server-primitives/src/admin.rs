use serde::{Deserialize, Serialize};

#[derive(Clone, Serialize, Deserialize, Debug)]
pub struct InstallApplicationRequest {
    pub application: calimero_primitives::application::ApplicationId, // TODO: rename to application_id
    pub version: semver::Version,
}

#[derive(Clone, Serialize, Deserialize, Debug)]
pub struct ApplicationListResult {
    pub apps: Vec<calimero_primitives::application::Application>,
}

#[derive(Debug, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SignatureMessage {
    pub nonce: String,
    pub application_id: String,
    pub timestamp: i64,
    pub node_signature: String,
    pub message: String,
    pub client_public_key: String,
}
