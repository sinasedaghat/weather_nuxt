<script setup lang="ts">
// const appconf = useAppConfig()
// const name = ref('akbar')
// const ss = useReza(name).rezaFamily
// console.log("foo", appconf.foo)
// const test = () => {
//   ss.value = useReza(name).rezaFamily.value
  
// }
const xxx = ref({
  name: 'sina',
  age: 29,
  family: {
    dad: 'seda',
    mom: 'moha'
  }
})


console.log('dddddddddd', xxx.value.hasOwnProperty('age'))

</script>

<template>
<!-- <v-btn @click="test">jkj</v-btn>
<v-text-field v-model="name"></v-text-field>
{{ ss }}
{{ appconf.foo }} -->
</template>