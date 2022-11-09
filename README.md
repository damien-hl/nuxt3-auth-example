# Nuxt 3 Minimal Starter

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

Database is initially loaded as a sqlLite DB via [Prisma](https://www.prisma.io/). You may need to create it with the command `npx prisma migrate dev`.

![Cover](./cover.jpg)

## Features

- ⚡️ Login with email and password
- 🗄️ User data stored in database via [Prisma](https://www.prisma.io/)
- 📝 Guest, private, admin pages
- 🔥 Active session on page reload with [JWT](https://jwt.io/)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.
