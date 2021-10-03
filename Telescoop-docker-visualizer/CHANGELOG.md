## v0.2.3 (28-Jan-2021)

### New features

- New API endpoint for websocket connection exposing live feed of docker logs for specified container

### Optimizations

- Dockerfile buildtime improved
  - Rust staging to cache dependencies

## v0.2.2 (18-Jan-2021)

### Bug fixes

- Ongoing issue with CORS on Chrome workaround
  - Further investigation needed (Chrome vs Firefox differences in CORS detection)

## v0.2.1 (18-Jan-2021)

### Bug fixes

- Blocking font files downloads from same origin.
  - CORS policy for same-origin requests had to be specified.

## v0.2.0 (17-Jan-2021)

### New features

- Two tabs: Dashboard and Containers
- Dashboard still shows docker info on bottom of the page. There are also some graphs just to try.
- Containers show updated container table with more info and autorefresh button.

## v0.1.0 (13-Jan-2021)

### New features

- Initial table with containers
- Expandable JSON with info of current Docker instance
- Tags
