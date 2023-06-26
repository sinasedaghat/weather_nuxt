<script setup lang="ts">

const q1 = ref('tehran')
const q3 = ref('')
const { data ,refresh} = await useFetch(() => `http://api.openweathermap.org/data/2.5/weather`,
{
  server: false,
  query: {
    APPID: '101220cf0f0156b2a096ce775fd0b916',
    units: 'metric',
    q: q1
  }
})
const q2 = ()=> {
  const test = q3.value
  q1.value = test
  q3.value = ""
  console.log(test)
}
</script>

<template>
  <input type="text" v-model="q3">
  <button @click="q2()">ssss</button>


{{ q1 }}
{{ data }}
</template>