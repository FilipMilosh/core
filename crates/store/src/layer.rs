use crate::iter::{Iter, Structured};
use crate::key::{AsKeyParts, FromKeyParts};
use crate::slice::Slice;
use crate::tx::Transaction;
use crate::{Handle, Store};

// todo!
// mod cache;
mod experiments;
pub mod read_only;
pub mod temporal;

pub trait Layer {
    type Base: Layer;
}

pub trait ReadLayer<'a>: Layer {
    fn has(&self, key: &'a impl AsKeyParts) -> eyre::Result<bool>;
    fn get(&self, key: &'a impl AsKeyParts) -> eyre::Result<Option<Slice>>;
    fn iter<K: AsKeyParts + FromKeyParts>(&self, start: &'a K)
        -> eyre::Result<Iter<Structured<K>>>;
}

pub trait WriteLayer<'a>: ReadLayer<'a> {
    fn put(&mut self, key: &'a impl AsKeyParts, value: Slice<'a>) -> eyre::Result<()>;
    fn delete(&mut self, key: &'a impl AsKeyParts) -> eyre::Result<()>;
    fn apply(&mut self, tx: &Transaction<'a>) -> eyre::Result<()>;

    fn commit(self) -> eyre::Result<()>;
}

pub trait LayerExt: Sized {
    fn handle(self) -> Handle<Self>;

    fn temporal<'a>(&mut self) -> temporal::Temporal<'_, 'a, Self>
    where
        Self: WriteLayer<'a>,
    {
        temporal::Temporal::new(self)
    }

    fn read_only<'a>(&'a self) -> read_only::ReadOnly<'a, Self>
    where
        Self: ReadLayer<'a>,
    {
        read_only::ReadOnly::new(self)
    }
}

impl<L: Layer> LayerExt for L {
    fn handle(self) -> Handle<Self> {
        Handle::new(self)
    }
}

impl Layer for Store<'_> {
    type Base = Self;
}

impl<'a> ReadLayer<'a> for Store<'a> {
    fn has(&self, key: &'a impl AsKeyParts) -> eyre::Result<bool> {
        let (col, key) = key.parts();

        self.db.has(col, key.as_slice())
    }

    fn get(&self, key: &'a impl AsKeyParts) -> eyre::Result<Option<Slice>> {
        let (col, key) = key.parts();

        self.db.get(col, key.as_slice())
    }

    fn iter<K: AsKeyParts + FromKeyParts>(
        &self,
        start: &'a K,
    ) -> eyre::Result<Iter<Structured<K>>> {
        let (col, key) = start.parts();

        Ok(self.db.iter(col, key.as_slice())?.structured_key())
    }
}

impl<'a> WriteLayer<'a> for Store<'a> {
    fn put(&mut self, key: &'a impl AsKeyParts, value: Slice<'a>) -> eyre::Result<()> {
        let (col, key) = key.parts();

        self.db.put(col, key.as_slice(), value)
    }

    fn delete(&mut self, key: &'a impl AsKeyParts) -> eyre::Result<()> {
        let (col, key) = key.parts();

        self.db.delete(col, key.as_slice())
    }

    fn apply(&mut self, tx: &Transaction<'a>) -> eyre::Result<()> {
        self.db.apply(tx)
    }

    fn commit(self) -> eyre::Result<()> {
        Ok(())
    }
}
