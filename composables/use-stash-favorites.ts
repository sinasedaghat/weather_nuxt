export default () => {
  const favorites = useCookie(
    'favorites',
    {
      default: () => '',
    }
  )
  
  const favList = computed(() => !!favorites.value ? favorites.value.toLowerCase().trim().split(',') : [])

  const updateFavorites = (city: string) => {
    favorites.value = city.toLowerCase().trim()
  }

  return {
    favList,
    updateFavorites
  }
}