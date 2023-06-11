const useWeatherService = async (city: string) => {
  // http://api.openweathermap.org/data/2.5/weather?q={city},{country}&APPID={api_key}

  const url = ref(import.meta.env.VITE_BASE_URL_WEATHER)
  const apiKey = ref(import.meta.env.VITE_API_KEY_WEATHER)
  const {data, error} = await useFetch(url, {
    query: {
      q: city,
      APPID: apiKey.value
    }
  })

  return {
    data,
    error
  }

  // return useState('foo', () => 'bar')
}

export default useWeatherService;