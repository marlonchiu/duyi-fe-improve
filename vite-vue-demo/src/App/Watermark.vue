<template>
  <div class="container">
    <Watermark text="版权所有">
      <div class="content"></div>
    </Watermark>
    <Watermark text="禁止转载" style="background: #28c840">
      <div class="content"></div>
    </Watermark>
  </div>
</template>


<script setup>
import Watermark from '../components/Watermark.vue';
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;

  .watermark-container {
    background: pink;
    margin-right: 20px;
  }

  .content {
    width: 400px;
    height: 400px;
  }
}
</style>