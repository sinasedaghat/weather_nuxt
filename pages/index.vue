<script setup lang="ts">
  // const 
  // const {data, error} = useFetch('')
  // const { weatherRef } = useWeatherService('tehran')
  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
  // import { Weather } from '@/types/weatherTypes'

  const city = ref('tehran')
  const input = ref('')

  // const weather: Ref<Weather>
  const url = ref(import.meta.env.VITE_BASE_URL_WEATHER)
  const apiKey = ref(import.meta.env.VITE_API_KEY_WEATHER)
  const {data, refresh} = await useFetch(url, {
    query: {
      // q: input.city,
      q: city,
      APPID: apiKey,
      units: 'metric' 
    },
    server: false,
  })
  // let weatherOBJ: Weather = {
  //   id: data.value.weather[0].id,
  //   city_id: data.value.id,
  //   name: data.value.name,
  //   country: data.value.sys.country,
  //   main: data.value.weather[0].main,
  //   description: data.value.weather[0].description,
  //   icon: data.value.weather[0].icon,
  //   temp: {
  //     temp: data.value.main.temp,
  //     feels_like: data.value.main.feels_like,
  //     temp_min: data.value.main.temp_min,
  //     temp_max: data.value.main.temp_max
  //   },
  //   wind: {
  //     speed: data.value.wind.speed
  //   }
  // }
  // const weather = ref(weatherOBJ)

  const callAPI = async () => {
    const text = input.value
    city.value = text
    input.value = ""
  }
</script>

<template>
  <!-- {{ data }} -->
  <!-- search section -->
  <v-row align="center" justify="center" dense>
    <v-col cols="12" class="mt-9">
      <v-card
        variant="text"
        class="mx-auto py-2"
        max-width="500"
      >
        <v-text-field
          v-model="input"
          :append-inner-icon="input ? 'mdi-magnify' : ''"
          label="City"
          variant="outlined"
          @click:append-inner="input ? callAPI() : ''"
          @keyup.enter="input ? callAPI() : ''"
        />
      </v-card>
    </v-col>
  </v-row>
  <!-- weather card -->
  <v-row align="center" justify="center" dense>
    <v-col cols="12">
      <v-card
        variant="flat"
        class="mx-auto"
        max-width="500"
        color="#9EA4C380"
      >
        <v-card-title>
          <span class="text-h5 font-weight-bold text-high-emphasis me-2">
            <!-- {{ weather.name }} --> {{ data.name }}
          </span>
          <span class="text-subtitle-1 font-weight-medium text-medium-emphasis">
            <!-- ({{ weather.country }}) -->
            ({{ data.sys.country }})
          </span>
        </v-card-title>

        <v-card-text>
          <v-row class="ma-0 pa-0" align="center" justify="start" dense>
            <!-- icon -->
            <v-col class="ma-0 pa-0" cols="auto">
              <!-- :src="`https://openweathermap.org/img/wn/${weather.icon}@4x.png`" -->
              <v-img 
                :src="`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`"
                max-height="90"
                max-width="90"
              />
            </v-col>
            <!-- temp -->
            <v-col class="ma-0 pa-0" cols="auto">
              <span class="text-h4 font-weight-regular text-high-emphasis">
                <!-- {{ parseInt(weather.temp.temp.toString()) }}°C -->
                {{ parseInt(data.main.temp.toString()) }}°C
              </span>
            </v-col>
          </v-row>
          
          <v-row class="mx-4 pa-0 mb-2" align="center" justify="start" dense>
            <!-- feels_like main description -->
            <!-- <v-col v-if="weather.temp.temp_max - weather.temp.temp_min > 1" class="ma-0 pa-0" cols="12"> -->
            <v-col v-if="data.main.temp_max - data.main.temp_min > 1" class="ma-0 pa-0" cols="12">
              <span class="text-caption font-weight-medium text-high-emphasis">
                <!-- The high will be {{ weather.temp.temp_max }}°C, the low will be {{ weather.temp.temp_min }}°C. -->
                The high will be {{ data.main.temp_max }}°C, the low will be {{ data.main.temp_min }}°C.
              </span>
            </v-col>

            <!-- feels_like main description -->
            <v-col class="ma-0 pa-0" cols="12">
              <span class="text-body-1 font-weight-medium text-high-emphasis">
                <!-- Feels like {{ parseInt(weather.temp.feels_like.toString()) }}°C. {{ weather.main }}, {{ weather.description }} -->
                Feels like {{ parseInt(data.main.feels_like.toString()) }}°C. {{ data.weather[0].main }}, {{ data.weather[0].description }}
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