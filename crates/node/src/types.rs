use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub enum PeerAction {
    Transaction(calimero_primitives::transaction::Transaction),
    TransactionConfirmation(TransactionConfirmation),
    CatchupRequest(CatchupRequest),
    CatchupResponse(CatchupResponse),
}

pub type Signature = Vec<u8>;

#[derive(Debug, Serialize, Deserialize)]
pub struct TransactionConfirmation {
    pub nonce: u64,
    pub transaction_hash: calimero_primitives::hash::Hash,
    // sha256(previous_confirmation_hash, transaction_hash, nonce)
    pub confirmation_hash: calimero_primitives::hash::Hash,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CatchupRequest {
    pub last_executed_transaction_hash: calimero_primitives::hash::Hash,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct TransactionWithConfirmation {
    pub transaction: calimero_primitives::transaction::Transaction,
    pub confirmation: TransactionConfirmation,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct CatchupResponse {
    pub transactions: Vec<TransactionWithConfirmation>,
}

#[derive(Serialize, Deserialize)]
pub struct SignedPeerAction {
    pub action: PeerAction,
    pub signature: Signature,
}
