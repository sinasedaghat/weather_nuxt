<script setup lang="ts">
  import { Weather } from '@/types/weatherTypes'
  const city = ref('tehran')
  const input = ref('')

  const url = ref(import.meta.env.VITE_BASE_URL_WEATHER)
  const apiKey = ref(import.meta.env.VITE_API_KEY_WEATHER)
  const {data, pending, refresh} = await useFetch(url, {
    query: {
      q: city,
      APPID: apiKey,
      units: 'metric' 
    },
    server: false,
    // pick: ['name'],
    transform: (response) => {
      console.log(response)
      return {reza : 'reza'}
    }
  })
// transform: (reponse) => {
//       let weatherOBJ: Weather = {
//         id: data.value.has data.value.weather[0].id,
//         city_id: data.value.id,
//         name: data.value.name,
//         country: data.value.sys.country,
//         main: data.value.weather[0].main,
//         description: data.value.weather[0].description,
//         icon: data.value.weather[0].icon,
//         temp: {
//           temp: data.value.main.temp,
//           feels_like: data.value.main.feels_like,
//           temp_min: data.value.main.temp_min,
//           temp_max: data.value.main.temp_max
//         },
//         wind: {
//           speed: data.value.wind.speed
//         }
//       }
      
//     }

  const callAPI = async () => {
    const text = input.value
    city.value = text
    input.value = ""
  }
</script>

<template>
  {{pending ? "loading" : data }}
  {{ pending }}
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
</template>