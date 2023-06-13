interface Temp {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
}

interface Wind {
  speed: number
  deg?: number
  gust?: number
}

interface Clouds {
  all?: number
}

interface Rain {
  one_hour?: number
  three_hour?: number
}

interface Snow {
  one_hour?: number
  three_hour?: number
}

interface Sun {
  sunrise: number
  sunset: number
}

interface Weather {
  id: number
  city_id: number
  name: string
  country: string
  main: string
  description: string
  icon: string
  temp: Temp
  wind?: Wind
  clouds?: Clouds
  rain?: Rain
  snow?: Snow
  sun?: Sun
}

export {
  Temp, 
  Wind,
  Clouds,
  Rain,
  Snow,
  Sun,
  Weather,
}
