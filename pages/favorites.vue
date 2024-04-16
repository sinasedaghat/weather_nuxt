<script setup lang="ts">
  const favStore = useStoreFavorites()
  const { hasFavorite, citiesDataList } = storeToRefs(favStore)
  // console.log(citiesDataList)

  // const timeMilliseconds: Ref<number> = ref(new Date().getTime())
  // const intervalId: Ref<number | null> = ref(null)
  
  //   onMounted(() => {
  //   intervalId.value = setInterval(() => {
  //     timeMilliseconds.value += 1000
  //   }, 1000);
  // });

  // onBeforeUnmount(() => {
  //   if (intervalId.value) {
  //     clearInterval(intervalId.value)
  //     timeMilliseconds.value = 0
  //   }
  // });
</script>

<template>
  <v-card
    class="mx-auto my-16" 
    variant="flat"
    max-width="1100px"
  >
    <!-- city cards -->
    <v-row v-if="hasFavorite" align="stretch" justify="start" dense>
      <!-- {{ hasFavorite }} -->
      <v-col 
        v-for="(data, city) in citiesDataList"
        :key="city"
        align-self="start"
        cols="12"
        md="6"
      >
        <FavoriteCard
          :city="(city as string)"
          :data="data"
          />
        <!--
        :time="timeMilliseconds"
        @updateData="(data) => favoritesStore.updateCityProperties(city as string ,data as FavData)"
        @upgradeFavorites="upgradeFavorites"
        -->
      </v-col>
      <!-- <v-btn @click="favStore.updateCities('tehran')">ssss</v-btn> -->
    </v-row>
  </v-card>
</template>