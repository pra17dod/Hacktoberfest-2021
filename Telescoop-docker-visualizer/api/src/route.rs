use warp::Filter;
use super::handler;

// healthcheck path
pub fn get_health() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
  warp::path("health-check").map(|| http::StatusCode::OK)
}

// webserver filters
// index file
pub fn get_index() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
  warp::get()
    .and(warp::path::end())
    .and(warp::fs::file("./static/index.html"))
}

// assets accompanying index file
pub fn get_assets() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
  warp::fs::dir("./static/")
}

// get docker info
pub fn get_info() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
  warp::get().and(warp::path("api"))
  .and(warp::path("info"))
  .and(warp::path::end())
  .and_then(handler::handle_get_info)
}

// get docker containers info
pub fn get_containers() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
warp::get().and(warp::path("api"))
  .and(warp::path("containers"))
  .and(warp::path::end())
  .and_then(handler::handle_get_containers)
}

// connect to websocket that feed the client with logs
// must specify container id
pub fn stream_logs() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
warp::ws().and(warp::path("ws"))
  .and(warp::path("logs"))
  .and(warp::path::param::<String>())
  .and(warp::path::end())
  .map(|ws: warp::ws::Ws, id: String| {
    ws.on_upgrade(move |socket| handler::handle_logs_feed(socket, id))
  })
}

