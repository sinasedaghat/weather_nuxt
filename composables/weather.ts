import type { ExpandedWeather } from '~/types/weather'

interface WeatherResponse {
  weather: any; // Adjust this type as per the actual type of `weather`
  // Add other properties if needed
}
export const useWeather = () => {
  const appConfig = useAppConfig()
  const url = appConfig.weatherURL

  const expandedWeather = async (city: Ref<string> | string ) => {
    console.log(url)
    const { data } = await useFetch(`${url}weather`, {
      params: {
        q: toValue(city),
        units: 'metric',
        APPID: import.meta.env.VITE_WEATHER_TOKEN
      },
      transform: (response) => {
        const resp = response as WeatherResponse
        console.log('sssss' ,response?.weather)
        // const expandedWeather: ExpandedWeather = {
        //   id: response.weather[0].id,
        //   city_id: response.id,
        //   shift_timezone: response.timezone,
        //   name: response.name || '',
        //   country: response.sys.country,
        //   location:  'location',
        //   // location:  `${response.name || ''}, ${this.countriesMap[response.sys.country.toLowerCase()].name_en || ''}`,
        //   main: response.weather[0].main,
        //   description: response.weather[0].description,
        //   icon: `https://openweathermap.org/img/wn/${response.weather[0].icon}@4x.png`, // response.weather[0].icon, // https://openweathermap.org/img/wn/response.weather[0].icon@4x.png
        //   temp: {
        //     temp: Math.round(response.main.temp),
        //     feels_like: Math.round(response.main.feels_like),
        //     temp_min: Math.round(response.main.temp_min),
        //     temp_max: Math.round(response.main.temp_max),
        //   },
        // }
        // if(response?.wind?.speed) expandedWeather['wind'] = this._wind(response.wind.speed, response.wind.deg ?? 0)
        // if(response?.visibility) expandedWeather['visibility'] = `${(response.visibility / 1000).toFixed(1)}km`
        // if(response?.main?.humidity) expandedWeather['humidity'] = `${response.main.humidity}%`
        // if(response?.main?.pressure) expandedWeather['pressure'] = `${response.main.pressure}hPa`




        console.log('expandedWeather ==> ', expandedWeather)


        return response
      }
    })

    // weather.value = data.value
    return data.value
  }

  return {
    url,
    expandedWeather
  }
}