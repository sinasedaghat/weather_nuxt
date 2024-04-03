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
        return typeof resp.data != 'string' ? pollutanModels.expanded(resp.data) : null
      }
    })
    // console.log('error pollutanModels', error.value?.statusCode)
    // console.log('status pollutanModels', status.value)
    return data.value
  }

  return {
    expanded
  }
}