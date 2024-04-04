use super::PtrSizedInt;

#[repr(C)]
#[derive(Eq, Ord, Copy, Hash, Clone, Debug, PartialEq, PartialOrd)]
pub struct RegisterId(PtrSizedInt);

impl RegisterId {
    pub const fn new(value: usize) -> Self {
        Self(PtrSizedInt::new(value))
    }
}

impl From<usize> for RegisterId {
    fn from(value: usize) -> Self {
        Self::new(value)
    }
}
