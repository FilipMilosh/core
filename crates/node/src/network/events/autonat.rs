use color_eyre::owo_colors::OwoColorize;
use libp2p::autonat;
use tracing::debug;

use super::{EventHandler, EventLoop};

impl EventHandler<autonat::Event> for EventLoop {
    async fn handle(&mut self, event: autonat::Event) {
        debug!("{}: {:?}", "autonat".yellow(), event);
    }
}
