use color_eyre::owo_colors::OwoColorize;
use libp2p::upnp;
use tracing::debug;

use super::{EventHandler, EventLoop};

impl EventHandler<upnp::Event> for EventLoop {
    async fn handle(&mut self, event: upnp::Event) {
        debug!("{}: {:?}", "upnp".yellow(), event);
    }
}
