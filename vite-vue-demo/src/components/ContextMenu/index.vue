<template>
  <div ref="containerRef">
    <slot></slot>
    <Teleport to="body">
      <Transition @before-enter="handleBeforeEnter" @enter="handleEnter" @after-enter="handleAfterEnter">
        <div v-if="showMenu" class="content-menu" :style="{ left: pos.posX + 'px', top: pos.posY + 'px' }">
          <div v-size-ob="handleSizeChange" class="menu-list">
            <div @click="handleClick(item)" class="menu-item" v-for="(item, i) in menu" :key="item.label">
              {{ item.label }}
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
/**
 * 1. 组件设计
 * 2. 定位方式：fixed
 * 3. 菜单的位置和可见度 x，y，showMenu
 * 4. 过渡动画 0 --> auto
 */
import { ref, computed } from 'vue'
import { useContextMenu } from './useContextMenu'
import { useViewport } from './useViewport'

const props = defineProps({
  menu: {
    type: Array,
    default: () => []
  }
})

const containerRef = ref(null)
const emit = defineEmits(['select'])
const { x, y, showMenu } = useContextMenu(containerRef)
const { vw, vh } = useViewport()

const pos = computed(() => {
  let posX = x.value
  let posY = y.value
  // 右边不够
  if (x.value > vw.value - w.value) {
    posX = x.value - w.value
  }
  // 下边不够
  if (y.value > vh.value - h.value) {
    posY = vh.value - h.value
  }
  return { posX, posY }
})

function handleClick(item) {
  showMenu.value = false
  emit('select', item)
}

function handleBeforeEnter(el) {
  el.style.height = 0
}

function handleEnter(el) {
  el.style.height = 'auto'
  const h = el.clientHeight
  el.style.height = 0
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.height = h + 'px'
      el.style.transition = '0.5s'
    })
  })
}

function handleAfterEnter(el) {
  el.style.transition = 'none'
}

// 元素尺寸
const w = ref(0)
const h = ref(0)
function handleSizeChange(size) {
  console.log(size)
  w.value = size.width
  h.value = size.height
}
</script>

<style scoped>
.content-menu {
  position: fixed;
  z-index: 999;
  padding: 4px 4px;
  border-radius: 6px;
  border: 1px solid rgba(222, 222, 222, 0.5);
  background-color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  user-select: none;

  &:focus {
    outline: none;
  }

  .menu-list {
    .menu-item {
      padding: 4px 12px;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
</style>
