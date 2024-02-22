use clap::Parser;
use futures::stream::StreamExt;
use futures_timer::Delay;
use libp2p::identity;
use libp2p::identity::PeerId;
use libp2p::kad;
use libp2p::metrics::{Metrics, Recorder};
use libp2p::swarm::SwarmEvent;
use libp2p::tcp;
use libp2p::{identify, noise, yamux};
use std::error::Error;
use std::path::PathBuf;
use std::str::FromStr;
use std::task::Poll;
use std::time::Duration;
use tracing_subscriber::EnvFilter;

mod behaviour;
mod config;

const BOOTSTRAP_INTERVAL: Duration = Duration::from_secs(5 * 60);

#[derive(Debug, Parser)]
#[clap(name = "cali boot servers", about = "Bootstrap nodes for cali p2p network")]
struct Opts {
    // path to config file with private key, currently not used
    #[clap(long)]
    config: PathBuf,

    #[clap(long)]
    enable_kademlia: bool,

    #[clap(long)]
    enable_autonat: bool,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    let _ = tracing_subscriber::fmt()
        .with_env_filter(EnvFilter::from_default_env())
        .try_init();

    let opt = Opts::parse();

    let local_keypair = {
        let keypair = identity::Keypair::generate_ed25519();
        let peer_id: PeerId = keypair.public().into();

        keypair
    };

    let mut swarm = libp2p::SwarmBuilder::with_existing_identity(local_keypair)
        .with_tokio()
        .with_tcp(
            tcp::Config::default().port_reuse(true).nodelay(true),
            noise::Config::new,
            yamux::Config::default,
        )?
        .with_quic()
        .with_dns()?
        .with_websocket(noise::Config::new, yamux::Config::default)
        .await?
        .with_behaviour(|key| {
            behaviour::Behaviour::new(key.public(), opt.enable_kademlia, opt.enable_autonat)
        })?
        .build();

    // boot node only
    swarm.listen_on("/ip4/0.0.0.0/tcp/8000".parse().unwrap());

    let mut bootstrap_timer = Delay::new(BOOTSTRAP_INTERVAL);

    loop {
        if let Poll::Ready(()) = futures::poll!(&mut bootstrap_timer) {
            bootstrap_timer.reset(BOOTSTRAP_INTERVAL);
            let _ = swarm
                .behaviour_mut()
                .kademlia
                .as_mut()
                .map(|k| k.bootstrap());
        }

        let event = swarm.next().await.expect("Swarm not to terminate.");
        match event {
            SwarmEvent::Behaviour(behaviour::BehaviourEvent::Identify(e)) => {
                tracing::info!("{:?}", e);

                if let identify::Event::Received {
                    peer_id,
                    info:
                        identify::Info {
                            listen_addrs,
                            protocols,
                            ..
                        },
                } = e
                {
                    if protocols.iter().any(|p| *p == kad::PROTOCOL_NAME) {
                        for addr in listen_addrs {
                            swarm
                                .behaviour_mut()
                                .kademlia
                                .as_mut()
                                .map(|k| k.add_address(&peer_id, addr));
                        }
                    }
                }
            }
            SwarmEvent::Behaviour(behaviour::BehaviourEvent::Ping(e)) => {
                tracing::debug!("{:?}", e);
            }
            SwarmEvent::Behaviour(behaviour::BehaviourEvent::Kademlia(e)) => {
                tracing::debug!("{:?}", e);
            }
            SwarmEvent::Behaviour(behaviour::BehaviourEvent::Relay(e)) => {
                tracing::info!("{:?}", e);
            }
            SwarmEvent::Behaviour(behaviour::BehaviourEvent::Autonat(e)) => {
                tracing::info!("{:?}", e);
            }
            SwarmEvent::NewListenAddr { address, .. } => {
                tracing::info!(%address, "Listening on address");
            }
            _ => {}
        }
    }
}
