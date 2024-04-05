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
  const citiesDataList = computed(() => citiesData)
  // const isFavorite = (city: Ref<string> | string): ComputedRef<boolean> => {
  const isFavorite = (city: string): ComputedRef<boolean> => {
    // console.log(cities.value)
    console.log(cities.value.includes(city))
    return computed(() => cities.value.includes(city))
  }

  // watchers
  watch(
    cities,
    () => {
      console.log('from watch', cities)
    }, 
    {
      once: true
    }
  )

  // methods
  const updateCities = (city: string) => {
    if(cities.value.includes(city.toLowerCase().trim())) {
      cities.value = cities.value.filter(item => item.toLowerCase().trim() != city.toLowerCase().trim())
      delete citiesData.value?.[toValue(city).toLowerCase().trim()]
    }
    else {
      cities.value.push(city.toLowerCase().trim())
      citiesData.value = { ...citiesData.value, [toValue(city).toLowerCase().trim()]: {} }
    }
    updateFavorites(cities.value.toString())
    // console.log('citiesList', citiesList.value.toString())
  }

  return{
    citiesList, citiesDataList, isFavorite,
    updateCities,
  }
})