<template>
  <a-layout style="height: 1000px;">
    <a-layout>
      <a-layout-sider :resize-directions="['right']">
        <Home />
      </a-layout-sider>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Home from '@/views/Home.vue'
</script>

<style scoped>
:deep(.arco-layout-sider),
:deep(.arco-layout-content) {
  padding: 20px;
  text-align: center;
}
</style>
