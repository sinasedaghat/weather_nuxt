<script setup lang="ts">
const route = useRoute()
console.log(route.path)
</script>

<template>
  <v-app-bar 
    color="primary" 
    density="compact"
    flat
  >
    <!-- logo of appbar -->
    <!-- TODO: after add scss file change cursor -->
    <v-img
      class="ms-4 pa-1 b-red"
      src="/logo_white.png"
      max-height="38"
      max-width="38"
      contain
      @click="navigateTo({ path: '/' })"
    />
    <!-- title of appbar -->
    <!-- TODO: after add scss file change cursor -->
    <v-app-bar-title class="ms-1" @click="navigateTo({ path: '/' })">
      <span class="text-subtitle-1 font-weight-bold">
        WEATHER
      </span>
    </v-app-bar-title>
    
    <!-- append item appbar -->
    <template v-slot:append>
      <v-btn 
        color="white" 
        size="small" 
        variant="outlined" 
        prepend-icon="mdi-city-variant"
        @click="navigateTo({ path: '/favorites' })"
        >
        <span class="font-weight-bold">favorite cities</span>
      </v-btn>
    </template>
  </v-app-bar>
</template>