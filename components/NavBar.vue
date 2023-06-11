<script setup lang="ts">


</script>

<template>
  <v-app-bar 
    color="primary" 
    density="compact"
    flat
  >
    <!-- <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template> -->


    <v-img
      class="ms-4 pa-1 b-red"
      src="/logo_white.png"
      max-height="38"
      max-width="38"
      contain
    />

    <v-app-bar-title class="ms-1">
      <span class="text-subtitle-1 font-weight-bold">
        WEATHER
      </span>
    </v-app-bar-title>

    <template v-slot:append>
      <v-btn 
        color="white" 
        size="small" 
        variant="outlined" 
        prepend-icon="mdi-city-variant"
      >
        <span class="font-weight-bold">favorite cities</span>
      </v-btn>
    </template>
  </v-app-bar>
</template>