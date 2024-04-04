export default () => {
  const favorites = useCookie(
    'favorites',
    {
      default: () => '',
      // default: () => null,
    }
  )
  const favList: Ref<string[]> = ref(!!favorites.value ? favorites.value.toLowerCase().trim().split(',') : [])

  watch(
    favList,
    () => {
      console.log('stach fav')
      
    },
    {
      once: true
    }
  )

  const updateFavorites = (city: Ref<string> | string) => {
    // favList.value.some(item => item === toValue(city).toLowerCase().trim()) ?
    favList.value.includes(toValue(city).toLowerCase().trim()) ?
      favList.value = favList.value.filter(item => item !== toValue(city).toLowerCase().trim()) :
      favList.value.push(toValue(city).toLowerCase().trim())
    favorites.value = favList.value.join(',')
    // sentence.includes(word)
    // console.log(favList.value[0])
  }

  return {
    favorites,
    favList,
    updateFavorites
  }
}