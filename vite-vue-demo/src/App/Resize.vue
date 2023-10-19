<template>
  <div class="container">
    <div v-size-ob="handleSizeChange" ref="chartRef" class="charts"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCharts } from '../hooks/useCharts'

const chartRef = ref(null)
const width = ref(500)

onMounted(() => {
  useCharts(width, chartRef)
})

function handleSizeChange(size) {
  console.log('🚀 ~ file: Resize.vue:17 ~ handleSizeChange ~ size:', size)
  width.value = size.width
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  gap: 30px;
}
</style>
