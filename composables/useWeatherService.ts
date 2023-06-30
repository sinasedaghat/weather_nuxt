
const useWeatherService = async <T> (city: string) => {
  const url:string = ref(import.meta.env.VITE_BASE_URL_WEATHER)
  const apiKey = ref(import.meta.env.VITE_API_KEY_WEATHER)


  const { data, error } =  await useFetch<T>(url, {
    query: {
      q: city,
      APPID: apiKey.value,
      units: 'metric' 
    }
  })

  // const weatherData = data.value
  
  return {
    data
  }
}

export default useWeatherService