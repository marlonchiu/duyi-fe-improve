<script setup>
import HeavyComp from '../components/HeavyComp.vue'
import { useDefer } from '../hooks/useDefer'
const defer = useDefer()
</script>

<template>
  <div class="container">
    <!-- 10000 就会出现明显的白屏了 -->
    <template v-for="n in 100">
      <HeavyComp v-if="defer(n)" />
    </template>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
}
</style>
