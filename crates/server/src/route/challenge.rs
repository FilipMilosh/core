use axum::{http::StatusCode, response::IntoResponse};
use rand::{thread_rng, RngCore};
use base64::{engine::general_purpose::STANDARD, Engine};
use tower_sessions::Session;

pub const CHALLENGE_KEY: &str = "challenge";

pub async fn request_challenge_handler(session: Session) -> impl IntoResponse {
    if let Some(challenge) = session.get(CHALLENGE_KEY).await.unwrap_or(None) {
        // Challenge already exists in session, return it
        (StatusCode::OK, challenge)
    } else {
        // No challenge in session, generate a new one
        let challenge = generate_challenge();  // Implement this function
        session.insert("challenge", &challenge).await.unwrap();  // Insert the new challenge into the session
        (StatusCode::OK, challenge)
    }
}

fn generate_random_bytes() -> [u8; 32] {
    let mut rng = thread_rng();
    let mut buf = [0u8; 32];
    rng.fill_bytes(&mut buf);
    buf
}

fn generate_challenge() -> String {
    let random_bytes = generate_random_bytes();
    let encoded = STANDARD.encode(&random_bytes);
    encoded
}
