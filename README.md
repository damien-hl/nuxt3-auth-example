# Nuxt 3 Auth example

This application is a simple example of how to implement a local authentication system using Nuxt.

![Cover](./.github/assets/banner.jpg)

## Features

- 🔐 Login with email and password
- 🛡️ Guest, private and admin only pages
- 🔥 Keep user authenticated after page refresh

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

Copy the `.env.example` file to `.env` and fill in the values.

```bash
cp .env.example .env
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

## Credits

- [Nuxt](https://nuxt.com/)
- [UnoCSS](https://unocss.dev/)
- [The Copenhagen Book](https://thecopenhagenbook.com/)
