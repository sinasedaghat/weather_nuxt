<script setup lang="ts">

const  weatherData = useWeatherService('Tehran')
// console.log('3: weatherData', weatherData)

</script>

<template>
{{ weatherData }}
</template>