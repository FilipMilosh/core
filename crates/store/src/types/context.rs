use borsh::{BorshDeserialize, BorshSerialize};

use crate::entry::{Borsh, Identity, Value};
use crate::key;
use crate::slice::Slice;
use crate::types::PredefinedEntry;

pub type TransactionHash = [u8; 32];

#[derive(Eq, Clone, Debug, PartialEq, BorshSerialize, BorshDeserialize)]
pub struct ContextMeta {
    // todo! make [u8; 32] when application_id<->meta is a separate record
    pub application_id: Box<str>,

    pub last_transaction_hash: TransactionHash,
}

impl PredefinedEntry for key::ContextMeta {
    type DataType<'a> = Value<ContextMeta, Borsh>;
}

#[derive(Eq, Clone, Debug, PartialEq)]
pub struct ContextState<'a> {
    pub value: Slice<'a>,
}

impl PredefinedEntry for key::ContextState {
    type DataType<'a> = Value<ContextState<'a>, Identity>;
}

impl<'a> From<Slice<'a>> for ContextState<'a> {
    fn from(value: Slice<'a>) -> Self {
        Self { value }
    }
}

impl<'a> AsRef<[u8]> for ContextState<'a> {
    fn as_ref(&self) -> &[u8] {
        self.value.as_ref()
    }
}

#[derive(Eq, Clone, Debug, PartialEq, BorshSerialize, BorshDeserialize)]
pub struct ContextIdentity {
    pub private_key: Option<[u8; 32]>,
}

impl PredefinedEntry for key::ContextIdentity {
    type DataType<'a> = Value<ContextIdentity, Borsh>;
}

#[derive(Eq, Clone, Debug, PartialEq, BorshSerialize, BorshDeserialize)]
pub struct ContextTransaction {
    pub method: Box<str>,
    pub payload: Box<[u8]>,
    pub prior_hash: TransactionHash,
}

impl PredefinedEntry for key::ContextTransaction {
    type DataType<'a> = Value<ContextTransaction, Borsh>;
}
