import type { IWeatherResponse } from '~/types/weather'
import weatherModels from '~/models/weather'

export const useWeather = () => {
  const appConfig = useAppConfig()
  const url = appConfig.weatherURL

  const expanded = async (city: Ref<string> | string) => {
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
    return { data, status }
  }

  const shrunken = async (city: Ref<string> | string ) => {
    const { data, error, status } = await useFetch(`${url}weather`, {
      params: {
        q: toValue(city),
        units: 'metric',
        APPID: import.meta.env.VITE_WEATHER_TOKEN
      },
      transform: (response) => {
        const resp = response as IWeatherResponse
        return weatherModels.shrunkenTransformAdapter(resp)
      }
    })
    return data.value
  }

  return {
    expanded,
    shrunken
  }
}