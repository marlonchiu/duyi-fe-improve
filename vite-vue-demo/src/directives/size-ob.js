// 创建一个 map  Map会造成内存泄露 建议使用WeakMap

const map = new WeakMap()

const ob = new ResizeObserver((entries) => {
  for (const entry of entries) {
    console.log('ob ~ entry:', entry)
    // 运行 entry.target 对应的回调函数
    const handler = map.get(entry.target)
    if (handler) {
      handler({
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize
      })
    }
  }
})

export default {
  mounted(el, binding) {
    // 监听el元素尺寸的变化
    map.set(el, binding.value)
    ob.observe(el)
  },
  unmounted(el) {
    // 取消监听
    ob.unobserve(el)
  }
}
