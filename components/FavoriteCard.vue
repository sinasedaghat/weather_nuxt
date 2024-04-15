<script setup lang="ts">
import type { TFavData } from '~/types/favorites'

  interface Iprops {
    city: string
    data: TFavData
  }
  const props = defineProps<Iprops>()
</script>

<template>
<!-- this is component -->
city ==> {{ city }}
data ==> {{ data }}
</template>