use futures_util::{sink::SinkExt, stream::StreamExt};
use http::Response;
use hyper::{
  body::{Body, HttpBody},
  Client,
};
use hyperlocal::{UnixClientExt, Uri};
use warp::filters::ws::Message;

// handler for websocket connection with log stream for specified container id
pub async fn handle_logs_feed(websocket: warp::ws::WebSocket, id: String) {
  // splitting sender and receiver because we need task running and checking for messages
  // TODO: ping
  let (mut client_sink, mut client_stream) = websocket.split();

  //spawning task that will query docker.sock and send each new log message to client_sink
  tokio::spawn(async move {
    let mut response = query_docker(
      &format!(
        "/containers/{}/logs?stdout=true&stderr=true&follow=true",
        id
      )[..],
    )
    .await;

    // checking for closing message
    while let Some(next) = response.data().await {
      let chunk = next.unwrap();
      // data are being sent line by line to the ws client
      let message = if let Ok(msg) = String::from_utf8(Vec::from(&chunk[8..])) {
        msg
      } else {
        println!("Could not process");
        "".to_string()
      };
      client_sink.send(Message::text(message)).await.unwrap();
    }
  });

  // this should keep checking for the connection
  // break if the client_stream closes connection
  while let Some(Ok(msg)) = client_stream.next().await {
    if msg.is_close() {
      println!("Client closing connection!");
      return;
    };
  }
}

// get docker info on the entire instance
// same as command docker info
pub async fn handle_get_info() -> Result<impl warp::Reply, warp::Rejection> {
  let response = query_docker("/info").await;
  Ok(response)
}

// get docker containers info
pub async fn handle_get_containers() -> Result<impl warp::Reply, warp::Rejection> {
  let response = query_docker("/containers/json").await;
  Ok(response)
}

// helper function to query docker socket and return response with body
// body is usually in JSON format
// TODO: custom structs and deserializing
async fn query_docker(path: &str) -> Response<Body> {
  let url = Uri::new("/var/run/docker.sock", path).into();
  let client = Client::unix();
  client.get(url).await.unwrap()
}
