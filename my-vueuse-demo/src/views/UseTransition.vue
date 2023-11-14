<template>
  <div>
    <p> Join over </p>
    <p> {{ Math.round(output) }}+ </p>
    <p>Developers </p>
    <hr>
    <h2 :style="{ color: color } "> COLOR CHANGING </h2>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTransition, TransitionPresets } from '@vueuse/core'

const count = ref(0)
const output = useTransition(count, {
  duration: 3000,
  transition: TransitionPresets.easeOutExpo,
})
count.value = 5000

// 改变颜色
const source = ref([0, 0, 0])
const output2 = useTransition(source, {
  duration: 3000,
  transition: TransitionPresets.easeOutExpo,
})
const color = computed(() => {
  const [r, g, b] = output2.value
  console.log(output2.value)
  return `rgb(${r}, ${g}, ${b})`
})
source.value = [255, 0, 255]

</script>
