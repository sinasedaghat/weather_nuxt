import type { IPollutanResponse } from '~/types/pollution'
import pollutanModels from '~/models/pollution'

export const usePollution = () => {
  const appConfig = useAppConfig()
  const url = appConfig.pollutionURL

  const expanded = async (city: Ref<string> | string ) => {
    const { data, error, status } = await useFetch(`${url}feed/${toValue(city)}/`, {
      params: {
        token: import.meta.env.VITE_POLLUTION_TOKEN
      },
      transform: (response) => {
        const resp = response as IPollutanResponse
        return typeof resp.data != 'string' ? pollutanModels.expandedTransform(resp.data) : null
      }
    })
    return data.value
  }

  const shrunken = async (city: Ref<string> | string ) => {
    const { data, error, status } = await useFetch(`${url}feed/${toValue(city)}/`, {
      params: {
        token: import.meta.env.VITE_POLLUTION_TOKEN
      },
      transform: (response) => {
        const resp = response as IPollutanResponse
        return typeof resp.data != 'string' ? pollutanModels.shrunkenTransformAdapter(resp.data) : null
      }
    })
    return data.value
  }

  return {
    expanded,
    shrunken
  }
}