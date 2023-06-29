
export const useWeatherServiceNew = async (city: string) => {
  const url:string = ref(import.meta.env.VITE_BASE_URL_WEATHER)
  const apiKey = ref(import.meta.env.VITE_API_KEY_WEATHER)

  return await useFetch(url, {
    query: {
      q: city,
      APPID: apiKey.value,
      units: 'metric' 
    }
  })
}