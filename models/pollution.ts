import type { TSuccessResponse, IExpandedPollution } from '~/types/pollution'
import { APL, APLDescription } from '~/data/air_pollution_level'


class PollutionModels {
  private _airPollutionLevel(aqi: number): keyof typeof APLDescription {
    const level: number = Math.floor(aqi / 50) - (aqi % 50 ? 0 : 1)
    return APL[level] as keyof typeof APLDescription
  }

  expanded(resp: TSuccessResponse): IExpandedPollution {
    const expandedPollution: IExpandedPollution = {
      id: resp.idx || 0,
      name: resp.city.name || '',
      aqi: resp.aqi || 0,
      level: this._airPollutionLevel(resp.aqi || 0) ?? 'HAZARDOUS',
      description: APLDescription[this._airPollutionLevel(resp.aqi || 0) ?? 'HAZARDOUS'],
    }
    if(resp.iaqi?.pm25?.v) expandedPollution['pm25'] = {
      value: resp.iaqi?.pm25?.v, 
      color: APLDescription[this._airPollutionLevel(resp.iaqi?.pm25?.v)].color
    }
    if(resp.iaqi?.pm10?.v) expandedPollution['pm10'] = {
      value: resp.iaqi?.pm10?.v, 
      color: APLDescription[this._airPollutionLevel(resp.iaqi?.pm10?.v)].color
    }
    if(resp.iaqi?.co?.v) expandedPollution['co'] = {
      value: resp.iaqi?.co?.v,
      color: APLDescription[this._airPollutionLevel(resp.iaqi?.co?.v)].color
    }
    if(resp.iaqi?.no2?.v) expandedPollution['no2'] = {
      value: resp.iaqi?.no2?.v,
      color: APLDescription[this._airPollutionLevel(resp.iaqi?.no2?.v)].color
    }
    if(resp.iaqi?.so2?.v) expandedPollution['so2'] = {
      value: resp.iaqi?.so2?.v,
      color: APLDescription[this._airPollutionLevel(resp.iaqi?.so2?.v)].color
    }
    
    return expandedPollution
  }
}

export default new PollutionModels()