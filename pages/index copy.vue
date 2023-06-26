<script setup lang="ts">
  // const 
  // const {data, error} = useFetch('')
  // const { weatherRef } = useWeatherService('tehran')
  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
  import { Weather } from '@/types/weatherTypes'

  const city = ref('tehran')
  const input = reactive({city: 'tehran'})
  // const weather: Ref<Weather>
let test: string = 'tehran'
  const getData = async() => {

    const url = ref(import.meta.env.VITE_BASE_URL_WEATHER)
    const apiKey = ref(import.meta.env.VITE_API_KEY_WEATHER)
    const {data, error, refresh} = await useFetch(url, {
      query: {
        // q: city,
        q: test,
        APPID: apiKey.value,
        units: 'metric' 
      }
    })
    let weatherOBJ: Weather = {
      id: data.value.weather[0].id,
      city_id: data.value.id,
      name: data.value.name,
      country: data.value.sys.country,
    main: data.value.weather[0].main,
    description: data.value.weather[0].description,
    icon: data.value.weather[0].icon,
    temp: {
      temp: data.value.main.temp,
      feels_like: data.value.main.feels_like,
      temp_min: data.value.main.temp_min,
      temp_max: data.value.main.temp_max
    },
    wind: {
      speed: data.value.wind.speed
    }
  }
  
  const weather = ref(weatherOBJ)

}

  onMounted(() => {
    console.log('myheader mounted');
    getData()
  });

  
  const  callAPI = async () => {
    console.log('ssss', city.value)
    getData()
    // await refresh()
    console.log('ssss')
  }




</script>

<template>
  <!-- {{ data }} -->
  <v-row align="center" justify="center" dense>
    <v-col cols="12" class="my-9">
      <!-- {{ weather }} -->

      <!-- {{ countries }} -->

      <!-- <v-img :src="`https://openweathermap.org/img/wn/${data.weather[0  ].icon}@4x.png`"></v-img> -->
      <!-- <v-text-field
        v-model="city"
        :append-icon="city ? 'mdi-magnify' : 'mdi-magnify-remove-outline'"
        label="City"
        variant="outlined"
        @click:append="city ? callAPI() : ''"
      /> -->

      <v-text-field
        v-model="test"
        label="City"
        variant="outlined"
      />



      <!--  -->
      <v-btn @click="callAPI"></v-btn>
    </v-col>

   
  </v-row>  

  
</template>