import { ref, onMounted, onUnmounted } from 'vue'

export function useContextMenu(containerRef) {
  const x = ref(0)
  const y = ref(0)
  const showMenu = ref(false)

  const handleContextMenu = (e) => {
    e.preventDefault()
    e.stopPropagation()

    showMenu.value = true
    x.value = e.clientX
    y.value = e.clientY
  }

  const closeMenu = () => {
    showMenu.value = false
  }

  onMounted(() => {
    const div = containerRef.value
    div.addEventListener('contextmenu', handleContextMenu)
    // 菜单关闭
    window.addEventListener('click', closeMenu, true)
    window.addEventListener('contextmenu', closeMenu, true)
  })

  onUnmounted(() => {
    const div = containerRef.value
    containerRef?.value.removeEventListener('contextmenu')
    // 移除window 上的事件
    window.removeEventListener('click')
    window.removeEventListener('contextmenu')
  })

  return { x, y, showMenu }
}
