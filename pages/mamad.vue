<script setup>

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