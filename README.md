# Next Drizzle Turso Stater Repo

A starter repo setup to build [Next.js](https://nextjs.org/docs) applications using the stack of my choice.

## The Stack

- [Next.js](https://nextjs.org/docs)
- [Drizzle ORM](https://orm.drizzle.team/docs/quick-start) setup for [Turso DB](https://docs.turso.tech/)
- [Shadcn UI](https://ui.shadcn.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)

## Getting Started

### Clone the repo

```shell
git clone https://github.com/tonoyondaweb/next-drizzle-turso-starter.git
```

### Install Packages

```shell
npm i
# or
yarn i
# or
pnpm i
```

### Setup environment variables

```js
process.env.DATABASE_URL=
process.env.DATABASE_AUTH_TOKEN=
```

### Run the development server:

```shell
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
