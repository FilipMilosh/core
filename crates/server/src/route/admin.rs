use axum::{response::IntoResponse, routing::{get, post}, Json, Router};
use calimero_identity::did::DidDocument;
use serde::{Deserialize, Serialize};
use serde_json::to_string_pretty;
use tower_sessions::{MemoryStore, Session, SessionManagerLayer};

use crate::{http::StatusCode, route::challenge::CHALLENGE_KEY, verifysignature::verify_signature};

use super::challenge::request_challenge_handler;


async fn health_check() -> Json<&'static str> {
    Json("{\"status\":\"ok\"}")
}

async fn create_root_key(session: Session, Json(req): Json<PubKeyRequest>) -> impl IntoResponse {
    let pretty_json = to_string_pretty(&req).unwrap_or_else(|_| "Failed to serialize".into());

    // Print the pretty JSON string
    println!("Pretty printed JSON:\n{}", pretty_json);

    // Retrieve the challenge from the session
    if let Some(challenge) = session.get::<String>(CHALLENGE_KEY).await.unwrap_or(None) {
        // TODO: Verify the challenge
        // TODO: Verify the signature
        println!("Challenge: {:?}", challenge);
        if verify_signature(&challenge, "helloworld", "me", "http://127.0.0.1:2428/admin/confirm-wallet", &req.signature, &req.public_key) {
            // Signature is valid
            println!("Signature is valid");
        } else {
            // Signature is invalid
            println!("Signature is invalid");
            return (StatusCode::BAD_REQUEST, Json("{\"status\":\"Invalid signature\"}"));
        }
        let did = DidDocument::new(req.account_id.clone(), req.public_key.clone());
        println!("Path: {:?}", did.to_json());
        (StatusCode::OK, Json("{\"status\":\"Root key created\"}"))
    } else {
        // No challenge found in session
        (StatusCode::BAD_REQUEST, Json("{\"status\":\"No challenge found\"}"))
    }
}

#[derive(serde::Deserialize, serde::Serialize)]
#[serde(rename_all = "camelCase")] 
struct PubKeyRequest {
    account_id: String,
    public_key: String,
    signature: String,
}

pub fn admin_router() -> Router {
    let session_store = MemoryStore::default();
    let session_layer = SessionManagerLayer::new(session_store);
    Router::new()
    .route("/health", get(health_check))
    .route("/node-key", post(create_root_key))
    .route("/request-challenge", post(request_challenge_handler))
    .layer(session_layer)
}

#[derive(Debug, Serialize, Deserialize)]
pub struct AdminConfig {
    #[serde(default = "calimero_primitives::common::bool_true")]
    pub enabled: bool,
}