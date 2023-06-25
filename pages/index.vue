<script setup lang="ts">
  // const 
  // const {data, error} = useFetch('')
useWeatherService('tehran')
  // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

  const url = ref(import.meta.env.VITE_BASE_URL_WEATHER)
  const apiKey = ref(import.meta.env.VITE_API_KEY_WEATHER)
  const {data: weather, error} = await useFetch(url, {
    query: {
      q: 'Texas',
      APPID: apiKey.value,
      units: 'metric' 
    }
  })
</script>

<template>
  
  <v-row align="center" justify="center" dense>
    <v-col cols="12" class="my-9">
      {{ weather }}

      <!-- {{ countries }} -->

      <!-- <v-img :src="`https://openweathermap.org/img/wn/${data.weather[0  ].icon}@4x.png`"></v-img> -->

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
          <span class="text-subtitle-1 font-weight-medium text-medium-emphasis">({{ weather.sys.country }})</span>
        </v-card-title>

        <v-card-text>
          <v-row class="ma-0 pa-0" align="center" justify="start" dense>
            <!-- icon -->
            <v-col class="ma-0 pa-0" cols="auto">
              <v-img 
                :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`"
                max-height="90"
                max-width="90"
              />
            </v-col>
            <!-- temp -->
            <v-col class="ma-0 pa-0" cols="auto">
              <span class="text-h4 font-weight-regular text-high-emphasis">
                {{ parseInt(weather.main.temp) }}°C
              </span>
            </v-col>
          </v-row>
          
          <v-row class="mx-4 pa-0 mb-2" align="center" justify="start" dense>
            <!-- feels_like main description -->
            <v-col v-if="weather.main.temp_max - weather.main.temp_min > 1" class="ma-0 pa-0" cols="12">
              <span class="text-caption font-weight-medium text-high-emphasis">
                The high will be {{ weather.main.temp_max }}°C, the low will be {{ weather.main.temp_min }}°C.
              </span>
            </v-col>

            <!-- feels_like main description -->
            <v-col class="ma-0 pa-0" cols="12">
              <span class="text-body-1 font-weight-medium text-high-emphasis">
                Feels like {{ parseInt(weather.main.feels_like) }}°C. {{ weather.weather[0].main }}, {{ weather.weather[0].description }}
              </span>
            </v-col>
          </v-row>

          <v-divider class="border-opacity-100 mx-9 my-2" color="primary" />
          
          <v-row class="ma-0 pa-0 mb-2" align="center" justify="start" dense>
            <!-- rain -->
            <v-col v-if="weather.hasOwnProperty('rain')" class="ma-0 pa-0 mx-4" cols="auto">
              <v-icon size="small" color="#000000DE" start>mdi-weather-rainy</v-icon>
              <span class="text-caption font-weight-medium text-high-emphasis">
                {{ weather.rain['1h'] }}mm
              </span>
            </v-col>
            <v-divider v-if="weather.hasOwnProperty('rain')" vertical class="border-opacity-100" color="primary"></v-divider>
            <!-- snow -->
            <v-col v-if="weather.hasOwnProperty('snow')" class="ma-0 pa-0 mx-4" cols="auto">
              <v-icon size="small" color="#000000DE" start>mdi-weather-snowy</v-icon>
              <span class="text-caption font-weight-medium text-high-emphasis">
                {{ weather.snow['1h'] }}mm
              </span>
            </v-col>
            <v-divider v-if="weather.hasOwnProperty('snow')" vertical class="border-opacity-100" color="primary"></v-divider>
            <!-- humidity -->
            <v-col class="ma-0 pa-0 mx-4" cols="auto">
              <!-- <p class="text-caption font-weight-bold text-high-emphasis">Humidity</p> -->
              <v-icon size="small" color="#000000DE" start>mdi-cloud-percent-outline</v-icon>
              <span class="text-caption font-weight-medium text-high-emphasis">
                {{ weather.main.humidity }}%
              </span>
            </v-col>


            <!-- humidity -->
            <!-- cloud-percent-outline -->
          </v-row>
          

        </v-card-text>
    
      </v-card>
    </v-col>
 </v-row>  

  
</template>