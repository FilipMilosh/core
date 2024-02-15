use libp2p::{
    identity,
    mdns::{Mdns, Config},
    SwarmBuilder,
    PeerId,
    swarm::Swarm,
    Peerstore,
};

use std::error::Error;
use std::collections::HashSet;

mod config;

struct AllowListPeerstore {
    allow_list: HashSet<PeerId>,
}

impl AllowListPeerstore {
    fn new(allow_list: HashSet<PeerId>) -> Self {
        AllowListPeerstore { allow_list }
    }
}

impl Peerstore for AllowListPeerstore {
    fn add_peer(&mut self, peer_id: &PeerId) {
        if !self.allow_list.contains(peer_id) {
            return;
        }
        // Your custom logic to add the peer to the peer store
    }
}

async fn run() -> Result<(), Box<dyn Error>> {
    // Load configuration from environment variables
    let app_config = config::AppConfig::new();

    // Create a random identity for the bootstrap node
    let local_key = identity::Keypair::generate_ed25519();
    let local_peer_id = PeerId::from(local_key.public());

    // Create a Peerstore with the allow list
    let peerstore = AllowListPeerstore::new(app_config.allow_list);

    // Create a libp2p Swarm with mdns
    let swarm = SwarmBuilder::new(Mdns::new(Config::default()).await?, local_peer_id, peerstore)
        .executor(Box::new(|fut| {
            tokio::spawn(fut);
        }))
        .build();

    // Run the swarm
    Swarm::run(swarm).await;

    Ok(())
}

fn main() {
    let runtime = tokio::runtime::Runtime::new().unwrap();
    runtime.block_on(run()).unwrap();
}
