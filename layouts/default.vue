<template>
  <v-layout full-height>
    <AppBar />
    <v-main>
      <v-responsive max-width="1200" class="mx-auto">
        <slot />
      </v-responsive>
    </v-main>
  </v-layout>
  <!-- background-image: url('https://cdn.vuetifyjs.com/images/cards/cooking.png'); -->
</template>