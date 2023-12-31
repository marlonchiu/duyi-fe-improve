import { customRef } from 'vue'

export function debounceRef(value, delay = 1000) {
  let timer
  return customRef((track, trigger) => {
    return {
      get() {
        // 收集依赖 track()
        track()
        return value
      },
      set(val) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          // 派发更新 trigger()
          value = val
          trigger()
        }, delay)
      }
    }
  })
}