import { Weather } from '@/types/weatherTypes'


class WeatherModel {
  weather: Weather = {
    id: 0,
    city_id: 0,
    name: '',
    country: '',
    main: '',
    description: '',
    icon: '',
    temp: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0
    },
    wind: {
      speed: 0
    }
  }

  modeling(weather: any): Weather {
    console.log('weather from WeatherModel Class', weather)
    // this.weather.id = weather.weather.id
    // this.weather.city_id = weather.id
    // this.weather.name = weather.name
    // this.weather.country = weather.sys.country
    // this.weather.main = weather.weather.main
    // this.weather.description = weather.weather.description
    // this.weather.icon = weather.weather.icon
    // this.weather.temp = {
    //   temp: weather.main.temp,
    //   feels_like: weather.main.feels_like,
    //   temp_min: weather.main.temp_min,
    //   temp_max: weather.main.temp_max
    // }
    // this.weather.wind = weather.wind.speed
    // if(weather.wind.deg)

    return this.weather
  }
}

export default new WeatherModel()