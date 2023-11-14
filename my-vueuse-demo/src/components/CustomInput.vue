<template>
  <div>
    <input type="text" :value="data" @input="update" />
  </div>
</template>

<script>
import { useVModel } from '@vueuse/core'

export default {
  props: ['data'],
  setup(props, { emit }) {
    const data = useVModel(props, 'data', emit)
    console.log(data.value) // equal to props.data
    data.value = 'name' // equal to emit('update:data', 'name')
    const update = (event) => {
      data.value = event.target.value
    }
    return {
      data,
      update
    }
  },
}
</script>
