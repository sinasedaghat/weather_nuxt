import type { IPollutantResponse } from '~/types/pollution'

export const usePollution = () => {
  const appConfig = useAppConfig()
  const url = appConfig.pollutionURL

  const expanded = async (city: Ref<string> | string ) => {
    const { data, error, status } = await useFetch(`${url}feed/${toValue(city)}/`, {
      params: {
        token: import.meta.env.VITE_POLLUTION_TOKEN
      },
      transform: (response) => {
        const resp = response as IPollutantResponse
        console.log(typeof resp.data != 'string' ? resp.data.aqi : '')
        // return weatherModels.expandedTransform(resp)
      }
    })





    // ✓

    // const expandedPollution: ExpandedPollution = {
    //   id: this._data.idx || 0, ✓
    //   name: this._data.city.name || '', ✓
    //   aqi: this._data.aqi || 0, ✓
    //   level: this._airPollutionLevel(this._data.aqi || 0) ?? 'HAZARDOUS',
    //   description: APLDescription[this._airPollutionLevel(this._data.aqi || 0) ?? 'HAZARDOUS'],
    // }
    // if(this._data.iaqi?.pm25?.v) expandedPollution['pm25'] = {
    //   value: this._data.iaqi?.pm25?.v, 
    //   color: APLDescription[this._airPollutionLevel(this._data.iaqi?.pm25?.v)].color
    // }
    // if(this._data.iaqi?.pm10?.v) expandedPollution['pm10'] = {
    //   value: this._data.iaqi?.pm10?.v, 
    //   color: APLDescription[this._airPollutionLevel(this._data.iaqi?.pm10?.v)].color
    // }
    // if(this._data.iaqi?.co?.v) expandedPollution['co'] = {
    //   value: this._data.iaqi?.co?.v,
    //   color: APLDescription[this._airPollutionLevel(this._data.iaqi?.co?.v)].color
    // }
    // if(this._data.iaqi?.no2?.v) expandedPollution['no2'] = {
    //   value: this._data.iaqi?.no2?.v,
    //   color: APLDescription[this._airPollutionLevel(this._data.iaqi?.no2?.v)].color
    // }
    // if(this._data.iaqi?.so2?.v) expandedPollution['so2'] = {
    //   value: this._data.iaqi?.so2?.v,
    //   color: APLDescription[this._airPollutionLevel(this._data.iaqi?.so2?.v)].color
    // }

    // return expandedPollution
  }

  return {
    expanded
  }
}