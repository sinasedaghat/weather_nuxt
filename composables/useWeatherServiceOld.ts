import { Weather } from '@/types/weatherTypes'

const useWeatherService = async (city: string) => {
  // http://api.openweathermap.org/data/2.5/weather?q={city},{country}&APPID={api_key}
  // export const useJsonP = async (path) => {
  //   return await useFetch(() => `https://jsonplaceholder.typicode.com/${path}`)
  // }
  const url:string = ref(import.meta.env.VITE_BASE_URL_WEATHER)
  const apiKey = ref(import.meta.env.VITE_API_KEY_WEATHER)
  const {data, error} = await useFetch(url, {
    query: {
      q: city,
      APPID: apiKey.value,
      units: 'metric' 
    }
  })
  console.log('dataxxxxx', data.value)
  let weather: Weather = {
  // let weather = {
    id: data.value.weather[0].id,
    city_id: data.value.id,
    name: data.value.name,
    country: data.value.sys.country,
    main: data.value.weather[0].main,
    description: data.value.weather[0].description,
    icon: data.value.weather[0].icon,
    temp: {
      temp: data.value.main.temp,
      feels_like: data.value.main.feels_like,
      temp_min: data.value.main.temp_min,
      temp_max: data.value.main.temp_max
    },
    wind: {
      speed: data.value.wind.speed
    }
  }

  const weatherRef = ref(weather)

console.log("weather", weather)










  return {
    // data,
    // error
    weatherRef
  }
 

  // return useState('foo', () => 'bar')
}

export default useWeatherService;