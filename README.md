# updog

**Updog uses docker-compose which cannot provide high availability and is thus
not suitable for production purposes**

**Updog** is a system for uptime monitoring of multiple HTTP services. Service
status can be accesses thorough a public dashboard which is configured through a
protected admin panel.

## Spinning it up

To spin up Updog do

```sh
docker-compose up --build
```

The Traefik dashboard is available [here](http://127.0.0.1:8080/dashboard/#/).

## Installation

To install all dependencies, run `npm install --dependencies` in the root
folder.
