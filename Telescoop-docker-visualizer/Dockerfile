FROM rust:1.49-slim as rust-planner
WORKDIR app
RUN cargo install cargo-chef --version 0.1.13
COPY ./api .
RUN cargo chef prepare --recipe-path recipe.json

FROM rust:1.49-slim as rust-cacher
WORKDIR app
RUN cargo install cargo-chef --version 0.1.13
COPY --from=rust-planner /app/recipe.json /app/api/recipe.json
RUN cd /app/api && cargo chef cook --release --recipe-path recipe.json

FROM rust:1.49-slim as rust-builder
WORKDIR app
COPY ./api .
COPY --from=rust-cacher /app/api/target target
COPY --from=rust-cacher $CARGO_HOME $CARGO_HOME
RUN cargo build --release --bin telescoop

FROM node:alpine as node-builder
WORKDIR /app
COPY ./client/package*.json ./
RUN npm install
COPY ./client .
RUN npm run release

FROM debian:buster-slim
WORKDIR /app
COPY --from=rust-builder /app/target/release/telescoop  /usr/local/bin/telescoop
COPY --from=node-builder /app/dist /app/static/
VOLUME /var/run/docker.sock
EXPOSE 7581
ENV RUST_LOG=tscoop
CMD ["telescoop"]
