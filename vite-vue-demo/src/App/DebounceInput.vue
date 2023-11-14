<template>
  <div class="container">
    <input v-model="text" />
    <p class="result">{{ text }}</p>
  </div>
</template>

<script setup>
import { debounceRef } from '../hooks/debounceRef.js'

const text = debounceRef('', 200)
console.log(text)

</script>


<style scoped>

</style>