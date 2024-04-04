import type { TFavData, TFavorites } from '~/types/favorites'
import type { TShrunkenWeather } from '~/types/weather'
import type { TShrunkenPollution } from '~/types/pollution'

export const useStoreFavorites = defineStore('storeFavorites', () => {
  const { favList, updateFavorites } = useStashFavorites()
  // const cities: Ref<string[]> = ref([])
  const cities: Ref<string[]> = ref(favList)
  // const citiesData: Ref<TFavorites | null> = ref(null)
  const citiesData: Ref<TFavorites | null> = ref(
    cities.value.reduce((obj, key) => {
      return { ...obj, [key]: {} }
    }, {})
  )

  
  // const citiesData: Ref<TFavorites | null> = ref(null)

  // watch(
  //   favList,
  //   () => {
  //     console.log('sssss')
  //     cities.value = favList.value
  //     citiesData.value = favList.value.reduce((obj, key) => {
  //       return {
  //         ...obj,
  //         [key] : {}
  //       }
  //     }, {})
  //   },
  //   {
  //     once: true
  //   }
  // )

  // const updateBulkCities = (bulkCities: string[]) => {
  //   cities.value = [ ...bulkCities ]
  // }

  const updateCities = (city: Ref<string> | string) => {
    console.log('before cities', cities.value.toString())
    updateFavorites(city)
   
    if(cities.value.includes(toValue(city).toLowerCase().trim())) {
      console.log('in IF')
      cities.value = cities.value.filter(item => item !== toValue(city))
      // delete citiesData.value?.[toValue(city).toLowerCase().trim()]
      console.log('in IF cities', cities.value.toString())
    }
    else {
      console.log('in ELSE')
      cities.value.push(toValue(city))
      citiesData.value = { ...citiesData.value, [toValue(city).toLowerCase().trim()]: {} }
      console.log('in ELSE citiesData', JSON.stringify(citiesData.value))
    }
    console.log('after cities', cities.value.toString())
    // updateFavorites(city)
  }

  return{
    // cities, citiesData,
    // updateBulkCities
    updateCities,
  }
})