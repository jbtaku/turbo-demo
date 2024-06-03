# my fullstack app's template

Run the following command:

```sh
bunx wrangler d1 create <db name>
```

```sh
bunx wrangler d1 migrations create <db name> upsert_table
```

```sh
bunx prisma migrate diff --from-empty --to-schema-datamodel ./prisma/schema.prisma --script --output migrations/0001_upsert_table.sql
```

```sh
bunx prisma migrate diff --from-local-d1 --to-schema-datamodel ./prisma/schema.prisma --script --output migrations/0002_upsert_table.sql
```

```sh
bunx wrangler d1 migrations apply <db name> --local
```
```sh
bunx wrangler d1 migrations apply <db name> --remote
```