use std::sync::Arc;

use axum::response::IntoResponse;
use axum::Extension;
use calimero_primitives::identity::Did;
use serde::Serialize;
use tower_sessions::Session;

use crate::admin::service::{parse_api_error, AdminState, ApiResponse};
use crate::admin::storage::did::get_or_create_did;

#[derive(Debug, Serialize)]
struct NodeDid {
    did: Did,
}

#[derive(Debug, Serialize)]
struct DidResponse {
    data: NodeDid,
}

pub async fn fetch_did_handler(
    _session: Session,
    Extension(state): Extension<Arc<AdminState>>,
) -> impl IntoResponse {
    // todo! experiment with Interior<Store>: WriteLayer<Interior>
    let did = get_or_create_did(&mut state.store.clone()).map_err(|err| parse_api_error(err));
    return match did {
        Ok(did) => ApiResponse {
            payload: DidResponse {
                data: NodeDid { did },
            },
        }
        .into_response(),
        Err(err) => err.into_response(),
    };
}
