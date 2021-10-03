extern crate pretty_env_logger;
#[macro_use] extern crate log;

use warp::Filter;

mod handler;
mod route;

#[tokio::main]
async fn main() {
  pretty_env_logger::init();
  let log = warp::log("tscoop");

  let routes = route::get_health()
    .or(route::get_index())
    .or(route::get_assets())
    .or(route::get_info())
    .or(route::get_containers())
    .or(route::stream_logs())
    .with(warp::cors().allow_any_origin())
    .with(log);

  warp::serve(routes).run(([0, 0, 0, 0], 7581)).await;
}
