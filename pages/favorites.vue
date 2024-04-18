<script setup lang="ts">
import type { TFavData } from '~/types/favorites';

  const favStore = useStoreFavorites()
  const { hasFavorite, citiesDataList } = storeToRefs(favStore)
  const timeMilliseconds: Ref<number> = ref(new Date().getTime())
  const intervalId: Ref<number | null> = ref(null)
  
  onMounted(() => {
    intervalId.value = setInterval(() => {
      timeMilliseconds.value += 1000
    }, 1000) as any as number;
  });

  onBeforeUnmount(() => {
    if (intervalId.value) {
      clearInterval(intervalId.value)
      timeMilliseconds.value = 0
    }
  });
</script>

<template>
  <v-card
    class="mx-auto my-16" 
    variant="flat"
    max-width="1100px"
  >
    <!-- city cards -->
    <v-row v-if="hasFavorite" align="stretch" justify="start" dense>
      <v-col 
        v-for="(data, city) in citiesDataList"
        :key="city"
        align-self="start"
        cols="12"
        md="6"
      >
        <ClientOnly>
          <FavoriteCard
            :city="(city as string)"
            :data="data"
            :time="timeMilliseconds"
            @update-data="(data) => favStore.updateCityProperties(city as string ,data as TFavData)"
            @upgrade-favorites="favStore.updateCities(city as string)"
          />
        </ClientOnly>
      </v-col>
    </v-row>
  </v-card>
</template>