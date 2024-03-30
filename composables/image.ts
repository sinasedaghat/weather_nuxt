export const useImage = () => {
  const appConfig = useAppConfig()
  const url = appConfig.imageURL

  const getSRC = async (city: Ref<string> | string ) => {
    const { data, error, status } = await useFetch(`${url}`, {
      params: {
        engine: 'google_images',
        lang: 'ar',
        q: `${toValue(city)} landmark`, // HD
        apikey: import.meta.env.VITE_IMAGE_TOKEN
      }
    })
  }

  return {
    getSRC
  }
}