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

## API

weather API:<br>
http://api.openweathermap.org/data/2.5/weather?q={city},{country}&APPID={api_key}<br>
api_key => get from https://openweathermap.org<br>
city => city name<br>
country => country iso (optional)<br>

google API for images:<br>
https://serpapi.com/search.json?engine=google_images&q={search_query}&apikey={api_key}<br>
api_key => get from https://serpapi.com<br>
search_query => query you want to search<br>

## .env
VITE_API_KEY_WEATHER = openweathermap api key<br>
VITE_BASE_URL_WEATHER = openweathermap base url<br>
VITE_API_KEY_IMAGE = serpapi api key<br>