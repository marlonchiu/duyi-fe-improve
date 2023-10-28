// 可以看看 https://github.com/vueuse/vueuse/blob/main/packages/core/useVModel/index.ts

// https://www.vuemastery.com/blog/best-vueuse-composables/

import { computed } from 'vue'

export function useVModel(props, propName, emit) {
  return computed({
    get() {
      return new Proxy(props[propName], {
        get(target, key) {
          return Reflect.get(target, key)
        },
        set(target, key, value) {
          emit('update:' + propName, {
            ...target,
            [key]: value
          })
          return true
        }
      })
    },
    set(val) {
      emit('update:' + propName, val)
    }
  })
}
