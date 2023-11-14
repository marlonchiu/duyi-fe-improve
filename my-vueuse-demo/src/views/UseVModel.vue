<script setup>
import CustomInput from '../components/CustomInput.vue'
import { ref } from 'vue'

const data = ref('hello')
</script>

<template>
  <div>
    <custom-input :data="data" @update:data="data =$event" />
    <p>父组件接收：{{ data }}</p>
  </div>
</template>

<style scoped>

</style>