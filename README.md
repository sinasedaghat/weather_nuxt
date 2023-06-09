# weather_nuxt# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

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

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# API

http://api.openweathermap.org/data/2.5/weather?q={city},{country}&APPID={ api key }

api key => get from https://openweathermap.org
city => city name
country => country iso (optional)

# .env
VITE_API_KEY = {api_key_value}