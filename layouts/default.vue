<script setup lang="ts">
  const route = useRoute()
  const favStore = useStoreFavorites()
  const { hasFavorite } = storeToRefs(favStore)
</script>

<template>
  <v-layout>
    <v-app-bar color="primary">
      <!-- title -->
      <v-row class="ma-0 pa-0 ms-6" align="center" justify="center">
        <v-col class="ma-0 pa-0 mb-n3" cols="12">
          <h1 class="text-info" style="font-family: Brush Script MT, cursive;">WeatherWise</h1>
        </v-col>
        <v-col class="ma-0 pa-0" cols="12">
          <small class="text-info" style="font-family: Brush Script MT, cursive; font-size: x-small;">Weather & Pollution Report</small>
        </v-col>
      </v-row>
      <v-spacer />
      <ClientOnly>
      <!-- favorite route -->
      <v-btn
        v-if="route.name !== 'favorites'"
        :disabled="!hasFavorite" 
        icon
        @click="navigateTo('/favorites')"
      >
        <v-icon>mdi-heart</v-icon>
        <v-tooltip
          activator="parent"
          location="start"
        >
          <span class="text-caption" v-text="'Favorite Cities'" />
        </v-tooltip>
      </v-btn>
      <!-- home route -->
      <v-btn
        v-if="route.name !== 'index'"
        icon
        @click="navigateTo('/')"
      >
        <v-icon>mdi-home</v-icon>
        <v-tooltip
          activator="parent"
          location="start"
        >
          <span class="text-caption" v-text="'Go To Home'" />
        </v-tooltip>
      </v-btn>
    </ClientOnly>
    </v-app-bar>
    <!-- main -->
    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>