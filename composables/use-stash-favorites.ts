export default () => {
  const favorites = useCookie(
    'favorites',
    {
      default: () => '',
      // default: () => null,
    }
  )
  // const favList: Ref<string[]> = ref(!!favorites.value ? favorites.value.toLowerCase().trim().split(',') : [])
  const favList = computed(() => !!favorites.value ? favorites.value.toLowerCase().trim().split(',') : [])


  // onMounted(() => {
  //   console.log('favorites from useCookie() built in composable in useStashFavorites() composable', favorites.value)
  //   console.log('favList from computed() in useStashFavorites() composable', favorites.value)
  // })

  const updateFavorites = (city: string) => {
    favorites.value = city.toLowerCase().trim()
  }

  return {
    favList,
    updateFavorites
  }
}