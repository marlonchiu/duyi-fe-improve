<template>
  <p> Is target visible? {{ targetIsVisible }} </p>
  <div class="container">
    <div class="target" ref="target">
      <h1>Hello world</h1>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

export default {
  setup() {
    const target = ref(null)
    const targetIsVisible = ref(false)
    const { stop } = useIntersectionObserver(
        target,
        ([{ isIntersecting }], observerElement) => {
          targetIsVisible.value = isIntersecting
        }
    )

    return {
      target,
      targetIsVisible
    }
  },
}
</script>

<style scoped>
.container {
  width: 80%;
  margin: auto;
  background-color: #fafafa;
  max-height: 300px;
  overflow: scroll;
}

.target {
  margin-top: 500px;
  background-color: #1abc9c;
  color: white;
  padding: 20px;
}
</style>
