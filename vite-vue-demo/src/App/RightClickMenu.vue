<template>
  <div class="container">
    <h1>右键菜单组件的封装</h1>
    <ContextMenu
      class="block"
      :menu="[{ label: '添加' }, { label: '编辑' }, { label: '删除' }, { label: '查看' }, { label: '复制' }]"
      @select="choose1 = $event.label"
    >
      <h2>{{ choose1 }}</h2>
    </ContextMenu>
    <!-- <ContextMenu
      class="block"
      :menu="[{ label: '员工' }, { label: '部门' }, { label: '角色' }, { label: '权限' }, { label: '菜单' }]"
      @select="choose2 = $event.label"
    >
      <h2>{{ choose2 }}</h2>
      <ContextMenu
        class="block"
        :menu="[{ label: '菜单1' }, { label: '菜单2' }, { label: '菜单3' }, { label: '菜单4' }]"
        @select="choose3 = $event.label"
      >
        <h2>{{ choose3 }}</h2>
      </ContextMenu>
    </ContextMenu> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ContextMenu from '../components/ContextMenu/index.vue'

const choose1 = ref('')
const choose2 = ref('')
const choose3 = ref('')
</script>

<style scoped>
.container {
  width: 400px;
  height: 400px;
  background: #cfa;
}
</style>
