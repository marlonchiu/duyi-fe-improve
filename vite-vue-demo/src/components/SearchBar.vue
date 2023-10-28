<template>
  <a-input v-model="model.keyword" :placeholder="model.placeholder">
    <template #prepend>
      <a-select v-model="model.selectedValue" placeholder="Select" :style="{ width: '200px' }">
        <a-option v-for="item in model.options" :key="item.value" :label="item.label" :value="item.value"></a-option>
      </a-select>
    </template>
    <template #append>
      <a-button type="primary">
        <template #icon>
          <icon-search />
        </template>
        Search
      </a-button>
    </template>
  </a-input>
</template>

<script setup>
import { computed } from 'vue'
import { IconSearch } from '@arco-design/web-vue/es/icon'

// import { useVModel } from '../hooks/useVModel'
// 两者实现逻辑是一样的
import { useVModel } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

// const model = computed({
//   get() {
//     return new Proxy(props.modelValue, {
//       get(target, key) {
//         console.log('getter')
//         return Reflect.get(target, key)
//       },
//       set(target, key, value) {
//         console.log('update')
//         console.log(key, value)
//         emit('update:modelValue', {
//           ...target,
//           [key]: value
//         })
//         console.log(target)
//         return true
//       }
//     })
//   },
//   set(val) {
//     console.log('setter')
//     emit('update:modelValue', val)
//   }
// })

const model = useVModel(props, 'modelValue', emit)
</script>
