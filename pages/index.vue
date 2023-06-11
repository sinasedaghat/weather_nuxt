<script setup lang="ts">
  // const 
  // const {data, error} = useFetch('')
  // const { data, error } = () => useWeatherService('tehran')
  const url = ref(import.meta.env.VITE_BASE_URL_WEATHER)
  const apiKey = ref(import.meta.env.VITE_API_KEY_WEATHER)
  const {data, error} = await useFetch(url, {
    query: {
      q: 'Florida',
      APPID: apiKey.value,
      units: 'metric' 
    }
  })
</script>

<template>
  
  <v-row align="center" justify="center" dense>
    <v-col cols="12" class="my-9">
      {{ data }}

      <!-- <v-img :src="`https://openweathermap.org/img/wn/${data.weather[0  ].icon}@4x.png`"></v-img> -->

    </v-col>
    <v-col cols="12" md="7">
      <v-card
        variant="text"
        class="mx-auto my-9"
      >
        <v-card-item title="Florida">
          <template v-slot:subtitle>
            <v-icon
              icon="mdi-alert"
              size="18"
              color="error"
              class="me-1 pb-1"
            ></v-icon>

            Extreme Weather Alert
          </template>
        </v-card-item>

        <v-card-text class="py-0">
          <v-row align="center" no-gutters>
            <v-col
              class="text-h2"
              cols="6"
            >
              64&deg;F
            </v-col>

            <v-col cols="6" class="text-right">
              <v-icon
                color="error"
                icon="mdi-weather-hurricane"
                size="88"
              ></v-icon>
            </v-col>
          </v-row>
        </v-card-text>

        <!-- <div class="d-flex py-3 justify-space-between">
          <v-list-item
            density="compact"
            prepend-icon="mdi-weather-windy"
          >
            <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
          </v-list-item>

          <v-list-item
            density="compact"
            prepend-icon="mdi-weather-pouring"
          >
            <v-list-item-subtitle>48%</v-list-item-subtitle>
          </v-list-item>
        </div> -->
      </v-card>
    </v-col>  
  </v-row>  

  
</template>