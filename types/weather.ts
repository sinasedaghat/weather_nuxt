type TTemp = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
}

// type TShrunkenPick = 'id' | 'city_id' | 'name' | 'country' | 'location' | 'main' | 'description' | 'icon' | 'temp'

type TShrunkenOmit = 'code' | 'city_id' | 'shift_timezone' | 'date' | 'country' | 'wind' | 'visibility' | 'humidity' | 'pressure'

type TWeather = {
  id: number;
  main: string;
  description: string;
  icon: string
}

type TMainWeathe = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure?: number;
  humidity?: number
}

export interface IWeatherResponse {
  id: number;
  name: string;
  sys: { country: string;} & { [key: string]: number };
  weather: TWeather[];
  main: TMainWeathe;
  wind?: { speed: number, deg: number },
  visibility?: number
  timezone: number
}

export interface IExpandedWeather {
  id: number
  city_id: number
  code?: number
  shift_timezone?: number
  date?: Date
  name: string
  country: string
  location: string
  main: string
  description: string
  icon: string
  temp: TTemp & {[k: string]: number}
  wind?: string
  visibility?: string
  humidity?: string
  pressure?: string
}

export type TShrunkenWeather = Omit<IExpandedWeather, TShrunkenOmit>