<script setup lang="ts">
import type { IExpandedWeather } from '~/types/weather'
import type { IExpandedPollution } from '~/types/pollution'
import type { TFavData } from '~/types/favorites'
import { chips as weatherChip } from '~/data/chips_weather'
import { chips as pollutionChip } from '~/data/chips_pollution'
import weatherModels from '~/models/weather'
import pollutanModels from '~/models/pollution'
import sky from '~/assets/images/cloud-background.mp4'

  const valid: Ref<boolean> = ref(true)
  const city: Ref<string> = ref('')
  const weather: Ref<IExpandedWeather | null> = ref(null)
  const pollution: Ref<IExpandedPollution | null> = ref(null)
  const image: Ref<string> = ref(createURL('default-cart'))
  const getWeather = useWeather()
  const getPollution = usePollution()
  const getImage = useImage()
  // const useFavorites = useStashFavorites()
  // const { favList } = useStashFavorites()
  const { 
    isFavorite,
    updateCities,
    // updateCityProperties
  } = useStoreFavorites()

  const required = (v: string) => {
    return !!v || 'Field is required'
  }
  const difrent = (v: string) => {
    return !!v && v.toLowerCase().trim() !== weather?.value?.name.toLowerCase().trim() || 'You have information about this city'
  }

  const analysisImageURL = computed(() => {
    return image.value.search('_nuxt') == -1
  })

  const search = async () => {
    weather.value = null
    pollution.value = null
    image.value = createURL('magnifier', 'gif')
    const {data, status} = await getWeather.expanded(city)
    weather.value = toValue(data)
    if (toValue(status) == 'success') {
      pollution.value = await getPollution.expanded(city)
      image.value = await getImage.getSRC(city) ?? createURL('city')
    }
    else if (toValue(status) == 'error') image.value = createURL('error')
    city.value = ''
  }

  const favAction = async () => {
    const data: TFavData = await {
      image: image.value,
      date: new Date()
    }
    if(weather.value?.name) data.weather = await weatherModels.shrunkenAdapter(weather.value)
    if(pollution.value?.name) data.pollution = await pollutanModels.shrunkenAdapter(pollution.value)

    if(weather?.value?.name) updateCities(weather.value.name, data)
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
    <!-- result data -->
    <v-card
      rounded="xl"
      class="mx-auto"
      max-width="600"
    >
      <!-- header data -->
      <v-img
        :src="image"
        height="320px"
        :gradient="analysisImageURL || image.search('city') != -1? 'to bottom, rgba(0,0,0,0), rgba(0,0,0,1)' : ''"
        :class="`align-end ${weather ? 'text-white' : ''}`"
        :cover="analysisImageURL"
      >
        <!-- title -->
        <v-card-title v-if="weather">
          <v-row align="start" justify="start" dense>
            <!-- city location -->
            <v-col class="ma-0 pa-0" cols="12">
              <span class="text-h4" v-text="weather?.location" />
            </v-col>
            <!-- weather description -->
            <v-col class="ma-0 pa-0" cols="12">
              <v-tooltip 
                text="Weather"
                location="bottom"
              >
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props" size="x-small" color="#FFF" start>mdi-weather-cloudy</v-icon>
                </template>
              </v-tooltip>
              <span 
                class="text-subtitle-1" 
                v-html="`${weather?.main} &quot;${weather?.description}&quot;`" 
              />
            </v-col>
            <!-- pollution level -->
            <v-col v-if="pollution" class="ma-0 pa-0" cols="12">
              <v-tooltip 
                text="Air Quality"
                location="bottom"
              >
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props" size="x-small" color="#FFF" start>mdi-smoke</v-icon>
                </template>
              </v-tooltip>
              <span 
                class="text-subtitle-1" 
                v-html="`${pollution?.description?.label ?? ''}`" 
              />
            </v-col>
          </v-row>
        </v-card-title>
      </v-img>

      <!-- details -->
      <v-card-text v-if="weather">
        <!-- main details -->
        <v-row class="ma-0 pa-0" align="start" justify="start" dense>
          <!-- weather -->
          <v-col class="ma-0 pa-0" cols="12" md="6">
            <!-- icon & description -->
            <v-tooltip 
              location="end"
              width="250"
            >
              <template v-slot:activator="{ props }">
                <v-avatar v-bind="props" size="60" class="mt-n3 me-n2">
                  <v-img :src="weather?.icon" alt="Cloud Logo" />
                </v-avatar>
              </template>
              <div>
                <span class="text-subtitle-2 font-weight-bold d-block">Weather</span>
                <span class="text-caption font-weight-bold d-block ms-2">{{ weather?.main }} - {{ weather?.description }}</span>
                <span class="text-caption d-block ms-2">
                  The air temperature will be {{ weather?.temp?.feels_like }}°C feels like, the maximum will be {{ weather?.temp?.temp_max }}°C and the minimum will be {{ weather?.temp?.temp_min }}°C.
                </span>
              </div>
            </v-tooltip>
            <!-- temp -->
            <span class="text-h4">
              {{ weather?.temp?.temp }}°C
            </span>
          </v-col>
          <!-- pollution -->
          <v-col v-if="pollution" class="ma-0 pa-0" cols="12" md="5">
            <!-- icon & description -->
            <v-tooltip 
              location="end"
              width="250"
            >
              <template v-slot:activator="{ props }">
                <v-icon v-bind="props" class="mt-n4 me-2" size="35" :color="pollution?.description.color">
                  {{ pollution?.description.icon }}
                </v-icon>
              </template>
              <div>
                <span class="text-subtitle-2 font-weight-bold d-block">Air Quality</span>
                <span class="text-caption font-weight-bold d-block ms-2">{{ pollution?.description?.label ?? '' }}</span>
                <span class="text-caption d-block ms-2">
                  {{ pollution?.description?.desc || '' }}
                </span>
              </div>
            </v-tooltip>
            <!-- AQI -->
            <span class="text-h4">
              {{ pollution?.aqi }}
            </span>
          </v-col>
          <v-spacer />
          <!-- fav button -->
          <v-col class="ma-0 pa-0" cols="12" md="auto">
            <!-- icon & description -->
              <v-tooltip 
              v-if="weather"
                location="end"
                width="250"
              >
              <template v-slot:activator="{ props }">
                <v-icon 
                  v-bind="props" 
                  class="mb-n4" 
                  size="25" 
                  :color="isFavorite(weather?.name.toLowerCase()).value ? 'error' : 'gray'"
                  @click="favAction"
                >
                  {{ isFavorite(weather?.name.toLowerCase()).value ? 'mdi-heart' : 'mdi-heart-outline' }}
                </v-icon>
                </template>
                <span class="text-caption">{{
                  isFavorite(weather?.name.toLowerCase()).value ? 'Removal from the list of favorite cities' : 'Add to list of favorite cities'
                }}</span>
              </v-tooltip>
          </v-col>
        </v-row>
        <v-divider />
          <!-- chips details -->
        <v-row class="ma-0 pa-0" align="start" justify="start" dense>
          <!-- weather -->
          <v-col v-if="weather" class="ma-0 pa-0" cols="12">
            <v-chip
              v-for="tag in Object.values(weatherChip).filter(tag => weather && Boolean(weather[tag.value as 'wind' | 'pressure' | 'humidity' | 'visibility']))"
              :key="tag.id"
              class="me-2 mt-2"
              density="comfortable"
              :color="tag.color"
            >
              <small>
                <span class="font-weight-bold me-1">{{ tag.label }}:</span>
                <span class="font-weight-medium">{{ weather[tag.value as 'wind' | 'pressure' | 'humidity' | 'visibility'] }}</span>
              </small>
            </v-chip>
          </v-col>
          <v-divider v-if="pollution" class="mt-2 mx-16" />
          <!-- pollution -->
          <v-col v-if="pollution" class="ma-0 pa-0" cols="12">
            <v-chip
              v-for="tag in Object.values(pollutionChip).filter(tag => pollution && Boolean(pollution[tag.value as 'co' | 'no2' | 'pm10' | 'pm25' | 'so2']?.value))"
              :key="tag.id"
              class="me-2 mt-2"
              density="comfortable"
              :color="pollution[tag.value as 'co' | 'no2' | 'pm10' | 'pm25' | 'so2']?.color"
              >
              <small>
                <span class="font-weight-bold me-1">{{ tag.label }}:</span>
                <span class="font-weight-medium">{{ pollution[tag.value as 'co' | 'no2' | 'pm10' | 'pm25' | 'so2']?.value }}µg/m³</span>
              </small>
            </v-chip>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>


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