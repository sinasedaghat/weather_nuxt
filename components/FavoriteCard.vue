<script setup lang="ts">
import type { TFavData } from '~/types/favorites'

  interface Iprops {
    city: string
    data: TFavData
  }
  const props = defineProps<Iprops>()

  const getWeather = useWeather()
  const getPollution = usePollution()
  const getImage = useImage()
  const x: any = ref(null)

  // onRenderTriggered(async() => {
    // console.log('from on mounted in FavoriteCard component', !!!props.data.date)
    if(!!!props.data.date) {
      const {data, status} = await getWeather.shrunken(props.city)
      // weather.value = toValue(data)
      await console.log('data from getWeather.shrunken composable in on mounted',data)
      x.value = toValue(data)

      // getWeather()
      // getPollution()
    }
  // })
</script>

<template>
  <v-card
    color="rgba(1, 103, 216, 0.15)"
    variant="flat"
    rounded="lg"
    style="border: 1.5px solid #0167D8;"
    min-height="155"
  >
    <div class="d-flex flex-no-wrap justify-start mb-0">
      <!-- city image -->
      <v-avatar
        class="ma-3"
        size="127"
        rounded="lg"
        style="border: 1px solid white;"
      >
        <v-img 
          :src="props.data?.image || createURL('default-favorite')" 
          :alt="`${props.data?.weather?.name} image`" 
          gradient="to bottom, rgba(1, 103, 216, 0.0), rgba(1, 103, 216, 0.3)"
          cover
        />
      </v-avatar>
      <!-- bas data -->
      <div>
        <v-card-title class="pt-5">
          <span class="text-h6 font-weight-bold text-primary" v-html="data?.weather?.location || capitalizeFirstLetters(city)" />
        </v-card-title>
        <!-- weather & pollution -->
        <v-card-text class="ma-0">
          <!-- weather -->
          <v-row v-if="data.hasOwnProperty('weather')" class="ma-0 pa-0" align="start" justify="start" dense>
            <v-col class="ma-0 pa-0" cols="12">
              <!-- icon & description -->
              <v-avatar size="48" class="mt-n1 me-n2">
                <v-img :src="data?.weather?.icon" alt="Cloud Logo" />
                <v-tooltip
                  activator="parent"
                  location="end"
                  width="250"
                >
                  <span class="text-subtitle-2 font-weight-bold d-block">Weather</span>
                  <span class="text-caption font-weight-bold d-block ms-2">{{ data?.weather?.main }} - {{ data?.weather?.description }}</span>
                  <span class="text-caption d-block ms-2">
                    The air temperature will be {{ data?.weather?.temp?.feels_like }}°C feels like, the maximum will be {{ data?.weather?.temp?.temp_max }}°C and the minimum will be {{ data?.weather?.temp?.temp_min }}°C.
                  </span>
                </v-tooltip>
              </v-avatar>
              <!-- temp -->
              <span class="text-h6 ms-3">
                {{ data?.weather?.temp?.temp }}°C
              </span>
              <!-- main -->
              <span class="text-subtitle-2 font-weight-medium ms-1">
                ({{ data?.weather?.main }})
              </span>
            </v-col>
          </v-row>
          <!-- pollution -->
          <v-row v-if="data.hasOwnProperty('pollution')" class="ma-0 pa-0" align="start" justify="start" dense>
            <v-col class="ma-0 pa-0" cols="12">
              <!-- icon & description -->
              <v-tooltip
                location="end"
                width="250"
              >
                <template v-slot:activator="{ props }">
                  <v-icon v-bind="props" class="mt-n2 mx-2" size="28" :color="data?.pollution?.description.color">
                    {{ data?.pollution?.description.icon }}
                  </v-icon>
                </template>
                <div>
                  <span class="text-subtitle-2 font-weight-bold d-block">Air Quality</span>
                  <span class="text-caption font-weight-bold d-block ms-2">{{ data?.pollution?.description?.label ?? '' }}</span>
                  <span class="text-caption d-block ms-2">
                    {{ data?.pollution?.description?.desc || '' }}
                  </span>
                </div>
              </v-tooltip>
              <!-- AQI -->
              <span class="text-h6 font-weight-medium ms-3">
                {{ data?.pollution?.aqi }}
              </span>
              <!-- level -->
              <span class="text-subtitle-2 font-weight-medium ms-1">
                ({{ data?.pollution?.description?.label ?? '' }})
              </span>
              </v-col>
          </v-row>
        </v-card-text>
      </div>
      {{ x }}
    </div>
  </v-card>
</template>
