import type { IWeatherResponse, IExpandedWeather, TShrunkenWeather } from '~/types/weather'
import countries from '~/assets/json/countries.json'
import { Directions } from '~/data/wind_directions'

class WeatherModels {
  countriesMap: { [key: string]: { [subKey: string]: string | null } } = countries

  private _wind(speed: number, degree: number): string {
    const direction = Math.floor((+degree % 360) / 22.5)
    return `${speed.toFixed(1)}m/s ${Directions[direction]}`
  }

  private _shrunkenResponse(resp: IWeatherResponse): TShrunkenWeather {
    const shrunkenWeather: TShrunkenWeather = {
      id: resp.weather[0].id,
      name: resp.name || '',
      location:  `${resp.name || ''}, ${this.countriesMap[resp.sys.country.toLowerCase()].name_en || ''}`,
      main: resp.weather[0].main,
      description: resp.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${resp?.weather[0]?.icon}@4x.png`,
      temp: {
        temp: Math.round(resp.main.temp),
        feels_like: Math.round(resp.main.feels_like),
        temp_min: Math.round(resp.main.temp_min),
        temp_max: Math.round(resp.main.temp_max),
      },
    }
    return shrunkenWeather
  }

  private _shrunkenData(data: IExpandedWeather): TShrunkenWeather {
    const shrunkenWeather: TShrunkenWeather = {
      id: data.id,
      name: data.name,
      location:  data.location,
      main: data.main,
      description: data.description,
      icon: data.icon,
      temp: Object.assign(data.temp) // shallow copy is good because properties of temp are primitive
    }
    return shrunkenWeather
  }

  public expandedTransform(resp: IWeatherResponse): IExpandedWeather {
    const expandedWeather: IExpandedWeather = {
      id: resp.weather[0].id,
      city_id: resp.id,
      shift_timezone: resp.timezone,
      name: resp.name || '',
      country: resp.sys.country,
      location:  `${resp.name || ''}, ${this.countriesMap[resp.sys.country.toLowerCase()].name_en || ''}`,
      main: resp.weather[0].main,
      description: resp.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${resp.weather[0].icon}@4x.png`,
      temp: {
        temp: Math.round(resp.main.temp),
        feels_like: Math.round(resp.main.feels_like),
        temp_min: Math.round(resp.main.temp_min),
        temp_max: Math.round(resp.main.temp_max),
      },
    }
    if(resp?.wind?.speed) expandedWeather['wind'] = this._wind(resp.wind.speed, resp.wind.deg ?? 0)
    if(resp?.visibility) expandedWeather['visibility'] = `${(resp.visibility / 1000).toFixed(1)}km`
    if(resp?.main?.humidity) expandedWeather['humidity'] = `${resp.main.humidity}%`
    if(resp?.main?.pressure) expandedWeather['pressure'] = `${resp.main.pressure}hPa`
    return expandedWeather
  }

  public shrunkenAdapter(data: IExpandedWeather | IWeatherResponse): TShrunkenWeather {
    if(data.hasOwnProperty('location')) return this._shrunkenData(data as IExpandedWeather)
    else return this._shrunkenResponse(data as IWeatherResponse)
  }
}

export default new WeatherModels()