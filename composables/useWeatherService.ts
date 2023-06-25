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
  // let weather: Weather = {
  // // let weather = {
  //   id: data.value.weather[0].id,
  //   city_id: data.value.id,
  //   name: data.value.name,
  //   country: data.value.sys.country,
  //   main: data.value,
  //   description: '',
  //   icon: '',
  //   temp: {
  //     temp: 0,
  //     feels_like: 0,
  //     temp_min: 0,
  //     temp_max: 0
  //   },
  //   wind: {
  //     speed: 0
  //   }
  // }


// console.log("weather", weather)










  return {
    data,
    error
  }
 

  // return useState('foo', () => 'bar')
}

export default useWeatherService;