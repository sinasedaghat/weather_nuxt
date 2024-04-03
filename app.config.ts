export default defineAppConfig({
  weatherURL: import.meta.env.VITE_WEATHER_BASE_URL,
  pollutionURL: import.meta.env.VITE_POLLUTION_BASE_URL,
  imageURL: import.meta.env.VITE_IMAGE_BASE_URL,
})
