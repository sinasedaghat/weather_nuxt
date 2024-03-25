<script setup lang="ts">
  const testStore = useTestStore()

  const changeVal = () => {
    testStore.testFunc()
  }

</script>

<template>
  {{ testStore.testValue }}
  <h3 @click="changeVal">change</h3>
  <v-chip color="primary">
    Primary
  </v-chip>
</template>
