export default defineAppConfig({
  lightTheme: {
    background: "#BBD0DE",
    surface: "#8AA5BD",
    primary: "#507394",
    secondary: "#9EA4C3",
    error: "#FF6A2A",
    info: "#2F74C8",
    success: "#9FC131",
    warning: "#FCD037",
  },
  weatherAppKey: import.meta.env.VITE_API_KEY_WEATHER,
  weatherURL: import.meta.env.VITE_BASE_URL_WEATHER
})