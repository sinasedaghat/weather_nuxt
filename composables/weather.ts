import type { IWeatherResponse } from '~/types/weather'
import weatherModels from '~/models/weather'

export const useWeather = () => {
  const appConfig = useAppConfig()
  const url = appConfig.weatherURL

  const expanded = async (city: Ref<string> | string ) => {
    const { data, error, status } = await useFetch(`${url}weather`, {
      params: {
        q: toValue(city),
        units: 'metric',
        APPID: import.meta.env.VITE_WEATHER_TOKEN
      },
      transform: (response) => {
        const resp = response as IWeatherResponse
        return weatherModels.expandedTransform(resp)
      }
    })
    // console.log('error weatherModels', error.value?.statusCode)
    // console.log('status weatherModels', status.value)
    return { data, status }
  }

  return {
    expanded
  }
}