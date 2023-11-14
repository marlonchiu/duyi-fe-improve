<template>
  <div v-for="item in links" :key="item.path">
    <router-link :to="item.path">{{ item.name }}</router-link>
  </div>
</template>

<script setup>
import { routes } from '@/router'

const links = routes.filter(item => !['/', '/home'].includes(item.path))
console.log(links)
</script>

<style scoped>

</style>
