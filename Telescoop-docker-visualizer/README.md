# Telescoop
Project is split into two parts, API and Client. You can start the API with `cargo run` in api/ directory. API serves Client from api/static/ if present. Client can be built into api/static/ with `npm install && npm run build` from within client/ directory.

Docker repo: [dergyitheron/telescoop](https://hub.docker.com/repository/docker/dergyitheron/telescoop)

Quick start
```sh
docker run -p 8888:7581 -v /var/run/docker.sock:/var/run/docker.sock --rm --name telescoop dergyitheron/telescoop:latest
```

## Client commands

### Install dependencies
```
npm install
```

### Compiles and hot-reloads for development
Uses http://localhost:7581/ by default for API calls. Can be changed in client/src/plugins/axios.ts
```
npm run serve
```

### Compiles files into API static directory
```
npm run build
```

### Compiles and minifies for production
Does the same thing as above command, except files are compiled into client/dist/ directory.
```
npm run release
```

### Lints and fixes files
```
npm run lint
```

## API commands

To run locally, run either `cargo run` or `cargo run --release` (depends on if you want optimizations or not).

## Docker image
TBD

## TODO
1. Rewrite client in quasar
2. Go full swarm mode support
3. Try to introduce concept of multitenancy (agents for multiple swarm clusters)
