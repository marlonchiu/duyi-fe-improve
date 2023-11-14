<template>
  <div ref="parentRef" class="watermark-container">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import useWatermarkBg from '../hooks/useWatermarkBg.js'

// import { useMutationObserver } from '@vueuse/core'

defineOptions({
  name: 'Watermark',
})

const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'Watermark'
  },
  fontSize: {
    type: Number,
    default: 40
  },
  gap: {
    type: Number,
    default: 20
  }
})

const bg = useWatermarkBg(props)
console.log(bg);

const parentRef = ref(null)
let div

// 重置水印
function resetWatermark() {

  if (!parentRef.value) {
    return false
  }

  if (div) {
    div.remove()
  }

  const {base64, size} = bg.value
  div = document.createElement('div')
  div.style.position = 'absolute'
  div.style.backgroundImage = `url(${base64})`
  div.style.backgroundSize = `${size}px ${size}px`
  div.style.backgroundRepeat = 'repeat'
  div.style.zIndex = 9999
  div.style.inset = 0
  parentRef.value.appendChild(div)
}

onMounted(resetWatermark)

const ob = new MutationObserver((entries) => {
  console.log('变化了~')
  for (const entry of entries) {
    console.log(entry)
    // 删除
    for (const dom of entry.removedNodes) {
      if (dom === div) {
        console.log('水印被删除')
        resetWatermark()
        return
      }
    }

    // 修改
    if (entry.target === div) {
      console.log('水印被修改')
      resetWatermark()
      return
    }
  }
})

onMounted(() => {
  ob.observe(parentRef.value, {
    childList: true,
    subtree: true,
    attributes: true
  })
})

onUnmounted(() => {
  ob.disconnect()
})
</script>

<style scoped>
.watermark-container {
  position: relative;
}
</style>