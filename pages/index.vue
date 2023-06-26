<script setup lang="ts">
  // const 
  // const {data, error} = useFetch('')
  // const { weatherRef } = useWeatherService('tehran')
  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
  import { Weather } from '@/types/weatherTypes'

  const city = ref('tehran')
  const input = reactive({city: 'tehran'})
  // const weather: Ref<Weather>
    let test: string = ''
  // const getData = () => {}
  const url = ref(import.meta.env.VITE_BASE_URL_WEATHER)
  const apiKey = ref(import.meta.env.VITE_API_KEY_WEATHER)
  const {data, error, refresh} = await useFetch(url, {
    server: false,
    query: {
      // q: input.city,
      q: city,
      APPID: apiKey,
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

  onMounted(() => {
    console.log('myheader mounted');
    city.value = 'karaj'
  });

  
  const  callAPI = async () => {
    console.log('ssss', city.value)
    city.value = test
    await refresh()
    console.log('ssss')
  }




</script>

<template>
  {{ data }}
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

    <v-col cols="12" md="12">
      <v-card
        variant="flat"
        class="mx-auto my-9"
        max-width="500"
        color="#9EA4C380"
      >
        <v-card-title>
          <span class="text-h5 font-weight-bold text-high-emphasis me-2">
            {{ weather.name }}
          </span>
          <span class="text-subtitle-1 font-weight-medium text-medium-emphasis">({{ weather.country }})</span>
        </v-card-title>

        <v-card-text>
          <v-row class="ma-0 pa-0" align="center" justify="start" dense>
            <!-- icon -->
            <v-col class="ma-0 pa-0" cols="auto">
              <v-img 
                :src="`https://openweathermap.org/img/wn/${weather.icon}@4x.png`"
                max-height="90"
                max-width="90"
              />
            </v-col>
            <!-- temp -->
            <v-col class="ma-0 pa-0" cols="auto">
              <span class="text-h4 font-weight-regular text-high-emphasis">
                {{ parseInt(weather.temp.temp.toString()) }}°C
              </span>
            </v-col>
          </v-row>
          
          <v-row class="mx-4 pa-0 mb-2" align="center" justify="start" dense>
            <!-- feels_like main description -->
            <v-col v-if="weather.temp.temp_max - weather.temp.temp_min > 1" class="ma-0 pa-0" cols="12">
              <span class="text-caption font-weight-medium text-high-emphasis">
                The high will be {{ weather.temp.temp_max }}°C, the low will be {{ weather.temp.temp_min }}°C.
              </span>
            </v-col>

            <!-- feels_like main description -->
            <v-col class="ma-0 pa-0" cols="12">
              <span class="text-body-1 font-weight-medium text-high-emphasis">
                Feels like {{ parseInt(weather.temp.feels_like.toString()) }}°C. {{ weather.main }}, {{ weather.description }}
              </span>
            </v-col>
          </v-row>

          <v-divider class="border-opacity-100 mx-9 my-2" color="primary" />
          
          <v-row class="ma-0 pa-0 mb-2" align="center" justify="start" dense>
            <!-- rain -->
            <!-- <v-col v-if="weather.hasOwnProperty('rain')" class="ma-0 pa-0 mx-4" cols="auto">
              <v-icon size="small" color="#000000DE" start>mdi-weather-rainy</v-icon>
              <span class="text-caption font-weight-medium text-high-emphasis">
                {{ weather.rain['1h'] }}mm
              </span>
            </v-col>
            <v-divider v-if="weather.hasOwnProperty('rain')" vertical class="border-opacity-100" color="primary"></v-divider> -->
            <!-- snow -->
            <!-- <v-col v-if="weather.hasOwnProperty('snow')" class="ma-0 pa-0 mx-4" cols="auto">
              <v-icon size="small" color="#000000DE" start>mdi-weather-snowy</v-icon>
              <span class="text-caption font-weight-medium text-high-emphasis">
                {{ weather.snow['1h'] }}mm
              </span>
            </v-col>
            <v-divider v-if="weather.hasOwnProperty('snow')" vertical class="border-opacity-100" color="primary"></v-divider> -->
            <!-- humidity -->
            <!-- <v-col class="ma-0 pa-0 mx-4" cols="auto">
              <v-icon size="small" color="#000000DE" start>mdi-cloud-percent-outline</v-icon>
              <span class="text-caption font-weight-medium text-high-emphasis">
                {{ weather.main.humidity }}%
              </span>
            </v-col> -->


            <!-- humidity -->
            <!-- cloud-percent-outline -->
          </v-row>
          

        </v-card-text>
    
      </v-card>
    </v-col>
  </v-row>  

  
</template>