import { type TShrunkenWeather } from '~/types/weather'
import { type TShrunkenPollution } from '~/types/pollution'

export type TFavData = {
  weather?: TShrunkenWeather
  pollution?: TShrunkenPollution
  date?: Date
  image?: string 
}

export type TFavorites = { [key: string]: TFavData | {} }