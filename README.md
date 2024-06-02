# my fullstack app's template

Run the following command:

```sh
npx wrangler d1 create <db name>
```

Add the database configuration information to wrangler.toml as output here.

```sh
npx wrangler d1 migrations apply <db name> --local
```
```sh
npx wrangler d1 migrations apply <db name> --remote
```