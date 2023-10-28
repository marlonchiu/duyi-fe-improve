<template>
  <div class="container">
    <!-- 使用computed拦截v-model【渡一教育】 -->
    <h1>使用computed拦截v-model【渡一教育】</h1>
    <br />
    <SearchBar v-model:modelValue="modelValue"></SearchBar>
    {{ modelValue }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'

const modelValue = ref({
  keyword: '666',
  placeholder: 'search keyword',
  selectedValue: 'shanghai',
  options: [
    {
      value: 'beijing',
      label: 'Beijing'
    },
    {
      value: 'shanghai',
      label: 'Shanghai'
    },
    {
      value: 'guangzhou',
      label: 'Guangzhou'
    },
    {
      value: 'chengdu',
      label: 'Chengdu'
    }
  ]
})
</script>

<style scoped></style>
