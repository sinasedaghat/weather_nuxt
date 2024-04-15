import type { TFavData, TFavorites } from '~/types/favorites'
import type { TShrunkenWeather } from '~/types/weather'
import type { TShrunkenPollution } from '~/types/pollution'

export const useStoreFavorites = defineStore('storeFavorites', () => {
  // importation
  const { favList, updateFavorites } = useStashFavorites()

  //declaration
  const cities: Ref<string[]> = ref([]) // 'tehran', 'karaj'
  const citiesData: Ref<TFavorites | null> = ref(null)
  
  // initialize
  cities.value = favList.value
  citiesData.value = favList.value.reduce((obj, key) => {
    return { ...obj, [key]: {} }
  }, {})
  
  // computies
  const citiesList = computed(() => cities)
  const citiesDataList = computed(() => citiesData.value)
  const hasFavorite = computed(() => !!cities.value.length)
  const isFavorite = (city: Ref<string> | string): ComputedRef<boolean> => {
  // const isFavorite = (city: string): ComputedRef<boolean> => {
    return computed(() => cities.value.includes(toValue(city)))
  }

  // watchers
  watch(
    hasFavorite,
    () => {
      console.log('from watch hasFavorite', hasFavorite.value)
    }, 
    {
      // once: true
    }
  )

  // methods
  const _addCities = (city:string) => {
    cities.value.push(city.toLowerCase().trim())
    citiesData.value = { ...citiesData.value, [toValue(city).toLowerCase().trim()]: {} }
  }

  const _removeCities = (city:string) => {
    cities.value = cities.value.filter(item => item.toLowerCase().trim() != city.toLowerCase().trim())
    delete citiesData.value?.[toValue(city).toLowerCase().trim()]
  }

  const updateCities = (city: string) => {
    if(cities.value.includes(city.toLowerCase().trim())) _removeCities(city)
    else _addCities(city)
    updateFavorites(cities.value.toString())
  }

  const updateCityWeather = (city: Ref<string> | string, weather: Ref<TShrunkenWeather> | TShrunkenWeather) => {
    citiesData.value = {
      ...citiesData.value,
      [toValue(city).toLowerCase().trim()]: {
        ...citiesData.value?.[toValue(city).toLowerCase().trim()],
        weather: toValue(weather),
        date: new Date()
      }
    }
  }
  const updateCityPollution = (city: Ref<string> | string, pollution: Ref<TShrunkenPollution> | TShrunkenPollution) => {
    citiesData.value = {
      ...citiesData.value,
      [toValue(city).toLowerCase().trim()]: {
        ...citiesData.value?.[toValue(city).toLowerCase().trim()],
        pollution: toValue(pollution),
        date: new Date()
      }
    }
  }
  const updateCityImage = (city: Ref<string> | string, image: Ref<string> | string) => {
    citiesData.value = {
      ...citiesData.value,
      [toValue(city).toLowerCase().trim()]: {
        ...citiesData.value?.[toValue(city).toLowerCase().trim()],
        image: toValue(image),
        date: new Date()
      }
    }
  }
  const updateCityProperties = (city:  Ref<string> | string, data: Ref<TFavData> | TFavData) => {
    citiesData.value = {
      ...citiesData.value,
      [toValue(city).toLowerCase().trim()]: {
        ...citiesData.value?.[toValue(city).toLowerCase().trim()],
        ...data
      }
    }
  }

  return{
    citiesList, citiesDataList, hasFavorite, isFavorite,
    updateCities,
  }
})