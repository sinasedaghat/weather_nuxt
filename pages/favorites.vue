<script setup lang="ts">
// definePageMeta({
//   title: 'My home page'
// })

//   const data:Promise<{ data: Ref<unknown>; }> = useWeatherService('tehran')
const { data } = useWeatherServiceNew('tehran')

</script>

<template>
    {{ data.data }}
  <!-- favorite cities ... -->
</template>