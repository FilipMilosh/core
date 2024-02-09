use thiserror::Error;
use wasmer_types::TrapCode;

#[derive(Debug, Error)]
pub enum VMRuntimeError {
    #[error(transparent)]
    StorageError(StorageError),
}

#[derive(Debug, Error)]
pub enum StorageError {}

#[derive(Debug, Error)]
pub enum FunctionCallError {
    #[error("compilation error: {}", .source)]
    CompilationError {
        #[from]
        source: wasmer::CompileError,
    },
    #[error("link error: {}", .source)]
    LinkError {
        #[from]
        source: wasmer::LinkError,
    },
    #[error("{0}")]
    MethodResolutionError(MethodResolutionError),
    #[error("{0:?}")]
    WasmTrap(WasmTrap),
    #[error(transparent)]
    HostError(HostError),
}

#[derive(Debug, Error)]
pub enum MethodResolutionError {
    #[error("method {name:?} has invalid signature: expected no arguments and no return value")]
    InvalidSignature { name: String },
    #[error("method {name:?} not found")]
    MethodNotFound { name: String },
}

#[derive(Debug, Error)]
pub enum HostError {
    #[error("invalid register id: {id}")]
    InvalidRegisterId { id: u64 },
    #[error("invalid memory access")]
    InvalidMemoryAccess,
    #[error("guest panicked: {message}")]
    GuestPanic { message: String },
    #[error("invalid UTF-8 string")]
    BadUTF8,
    #[error("key length overflow")]
    KeyLengthOverflow,
    #[error("value length overflow")]
    ValueLengthOverflow,
    #[error("logs overflow")]
    LogsOverflow,
}

#[derive(Debug)]
pub enum WasmTrap {
    StackOverflow,
    HeapAccessOutOfBounds,
    HeapMisaligned,
    TableAccessOutOfBounds,
    IndirectCallToNull,
    BadSignature,
    IntegerOverflow,
    IntegerDivisionByZero,
    BadConversionToInteger,
    UnreachableCodeReached,
    UnalignedAtomic,
    Indeterminate,
}

impl From<wasmer::ExportError> for FunctionCallError {
    fn from(err: wasmer::ExportError) -> Self {
        match err {
            wasmer::ExportError::Missing(name) => {
                FunctionCallError::MethodResolutionError(MethodResolutionError::MethodNotFound {
                    name,
                })
            }
            wasmer::ExportError::IncompatibleType => unreachable!(),
        }
    }
}

impl From<wasmer::InstantiationError> for FunctionCallError {
    fn from(err: wasmer::InstantiationError) -> Self {
        match err {
            wasmer::InstantiationError::Link(err) => err.into(),
            wasmer::InstantiationError::Start(err) => err.into(),
            wasmer::InstantiationError::CpuFeature(err) => {
                panic!("host CPU does not support a required feature: {}", err)
            }
            wasmer::InstantiationError::DifferentStores => {
                panic!("one of the imports is incompatible with this execution instance")
            }
            wasmer::InstantiationError::DifferentArchOS => {
                panic!("the module was compiled for a different architecture or operating system")
            }
        }
    }
}

impl From<wasmer::RuntimeError> for FunctionCallError {
    fn from(err: wasmer::RuntimeError) -> Self {
        match err.to_trap() {
            Some(TrapCode::StackOverflow) => FunctionCallError::WasmTrap(WasmTrap::StackOverflow),
            Some(TrapCode::HeapAccessOutOfBounds) => {
                FunctionCallError::WasmTrap(WasmTrap::HeapAccessOutOfBounds)
            }
            Some(TrapCode::HeapMisaligned) => FunctionCallError::WasmTrap(WasmTrap::HeapMisaligned),
            Some(TrapCode::TableAccessOutOfBounds) => {
                FunctionCallError::WasmTrap(WasmTrap::TableAccessOutOfBounds)
            }
            Some(TrapCode::IndirectCallToNull) => {
                FunctionCallError::WasmTrap(WasmTrap::IndirectCallToNull)
            }
            Some(TrapCode::BadSignature) => FunctionCallError::WasmTrap(WasmTrap::BadSignature),
            Some(TrapCode::IntegerOverflow) => {
                FunctionCallError::WasmTrap(WasmTrap::IntegerOverflow)
            }
            Some(TrapCode::IntegerDivisionByZero) => {
                FunctionCallError::WasmTrap(WasmTrap::IntegerDivisionByZero)
            }
            Some(TrapCode::BadConversionToInteger) => {
                FunctionCallError::WasmTrap(WasmTrap::BadConversionToInteger)
            }
            Some(TrapCode::UnreachableCodeReached) => {
                FunctionCallError::WasmTrap(WasmTrap::UnreachableCodeReached)
            }
            Some(TrapCode::UnalignedAtomic) => {
                FunctionCallError::WasmTrap(WasmTrap::UnalignedAtomic)
            }
            None => FunctionCallError::WasmTrap(WasmTrap::Indeterminate),
        }
    }
}
