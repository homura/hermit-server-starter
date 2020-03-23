# Hermit starter

A dead simple starter for hermit-purple-server, or lookup [the default impl](https://github.com/homura/hermit-purple-server/tree/lib/src/app) for more information

## Quick start

```
git clone https://github.com/homura/hermit-server-starter
cd hermit-server-starter
yarn
yarn generate
yarn dev:server
```

and then try the graphql on http://127.0.0.1:4040
```graphql
{
  blocks(first: 10){
    height
  }
}
```

## Modules

- [server](./src/server): Impl graphql schema and resolver
- [sync](./src/sync): Synchronize Muta's data parsing to the database
