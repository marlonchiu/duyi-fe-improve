<template>
  <div class="my-input">
    <h1>UI组件的二次封装</h1>
    <MyInput ref="inputRef" v-model="val">
      <template #prepend>
        <a-select :style="{ width: '120px' }" placeholder="Please select ...">
          <a-option>Beijing</a-option>
          <a-option>Shanghai</a-option>
          <a-option>Guangzhou</a-option>
        </a-select>
      </template>
      <template #append>
        <a-button type="primary"> Search </a-button>
      </template>
    </MyInput>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import MyInput from '../components/MyInput.vue'
const val = ref('')
const inputRef = ref(null)

onMounted(() => {
  console.log('封装', inputRef)
  // 验证 建议不使用ref
  inputRef.value.focus()
})
</script>
