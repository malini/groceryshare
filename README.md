# GroceryShare

This template should help get you started developing with Vue 3 in Vite.

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

Install [Docker Desktop](https://www.docker.com/get-started/), then you can build and run the docker images needed to run the site:

```sh
docker compose up --build
```

## Issues:

### Prisma migrations
if we ever need to blow away the mysql db, then you can rerun migrations against a new db. You'll have to open a shell to the backend container and run

```sh
npx prisma migrate dev --name init
```

And select `y` to run the migrations

### Mysql sock errors
If your mysql container is thrashing with mysql.sock errors, kill the container, remove the mysql\_data/mysql.sock file and restart the container
