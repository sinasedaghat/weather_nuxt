<script setup lang="ts">
import type { IExpandedWeather } from '~/types/weather'
import type { IExpandedPollution } from '~/types/pollution'
import sky from '@/assets/images/cloud-background.mp4'

  const valid: Ref<boolean> = ref(true)
  const city: Ref<string> = ref('')
  const weather: Ref<IExpandedWeather | null> = ref(null)
  const pollution: Ref<IExpandedPollution | null> = ref(null)
  const getWeather = useWeather()
  const getPollution = usePollution()
  const getImage = useImage()

  const required = (v: string) => {
    return !!v || 'Field is required'
  }
  const difrent = (v: string) => {
    return !!v && v.toLocaleLowerCase() != weather?.value?.name.toLocaleLowerCase() || 'You have information about this city'
  }

  const search = async () => {
    weather.value = await getWeather.expanded(city)
    pollution.value = await getPollution.expanded(city)
    await getImage.getSRC(city)
  }


</script>

<template>
  <v-container>
    <!-- background -->
    <video autoplay loop muted class="video-background">
      <source :src="sky" type="video/webm" />
      <source :src="sky" type="video/mp4" />
    </video>

    <!-- input card -->
    <v-card
      class="mx-auto mt-16" 
      variant="flat"
      color="#00000000"
      max-width="600px" 
      max-height="100px"
    >
      <v-card-text>
        <v-form v-model="valid" @submit.prevent="search">
          <v-row align="center" justify="center" dense>
            <!-- city text field -->
            <v-col cols="10">
              <v-text-field
                v-model.trim="city"
                class="elevation-0"
                color="primary"
                variant="solo"
                placeholder="Enter city name ..."
                :rules="[required, difrent]"
                hide-details
                rounded
              />
            </v-col>
            <!-- search button -->
            <v-col cols="auto">
              <v-btn 
                :disabled="!valid"
                type="submit"
                :variant="valid ? 'elevated' : 'outlined'" 
                color="white" 
                icon
              >
                <v-icon color="primary">mdi-map-search</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>

    WEATHER ==> 
    <br>{{ weather }}
    <hr>
    POLLUTION ==> 
    <br>
    {{ pollution }}
  </v-container>
</template>

<style>
  .video-background {
    position: absolute;
    z-index: -1000;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
</style>