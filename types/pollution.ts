import { APLDescription } from '~/data/air_pollution_level'

type TPollutant = {
  value: number
  color: string
}

type TShrunkenPick = 'aqi' | 'level' | 'description'

// type TShrunkenOmit = 'id' | 'name' | 'co' | 'no2' | 'pm10' | 'pm25' | 'so2'

type TAirQuality = Partial<Record<
  'co' | 'no2' | 'pm10' | 'pm25' | 'so2', { v?: number }
>>

export type TSuccessResponse = {
  idx: number;
  aqi: number;
  iaqi: TAirQuality;
  city: { name: string } & { [key: string]: any }
}

export interface IPollutanResponse {
  status: 'ok' | 'error';
  data: TSuccessResponse | string
}

export interface IExpandedPollution {
  id: number
  name: string
  aqi: number
  level: keyof typeof APLDescription
  description: typeof APLDescription[keyof typeof APLDescription]
  co?: TPollutant
  no2?: TPollutant
  pm10?: TPollutant
  pm25?: TPollutant
  so2?: TPollutant
}

export type TShrunkenPollution = Pick<IExpandedPollution, TShrunkenPick>