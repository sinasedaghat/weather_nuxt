

// const sample = async (city:string) => {
  
//   }
  export default function  (city:string) {
    // return useState('foo', () => 'bar')
    const url = ref(import.meta.env.VITE_BASE_URL_WEATHER)
    const apiKey = ref(import.meta.env.VITE_API_KEY_WEATHER)
    const { data, pending, error, refresh } =  useFetch(url, {
  
      query: {
        q: city,
        APPID: apiKey.value,
        units: 'metric' 
      },
    onResponse ({ response }) {
      console.log("success", response._data)
    return response._data
    },
    onResponseError ({ response }) {
    return response._data
    }
    })
    const resData = data.value
    console.log("data.value", data.value)
    return resData
    }

    // const countries: JSONData = countriesObj
  // const x: keyof JSONData = ref('ax')