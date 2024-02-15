use libp2p::core::PeerId;
use std::collections::HashSet;
use std::env;

pub struct AppConfig {
    pub allow_list: HashSet<PeerId>,
}

impl AppConfig {
    pub fn new() -> Self {
        let allow_list = match env::var("ALLOW_LIST") {
            Ok(allow_list_str) => allow_list_str
                .split(',')
                .filter_map(|peer_id_str| PeerId::from_str(peer_id_str).ok())
                .collect(),
            Err(_) => HashSet::new(),
        };

        AppConfig { allow_list }
    }
}
