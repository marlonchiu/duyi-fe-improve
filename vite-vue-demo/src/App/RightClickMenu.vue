<template>
  <h1>右键菜单组件的封装</h1>
  <div class="container">
    <ContextMenu
      class="block block-1"
      :menu="[{ label: '添加' }, { label: '编辑' }, { label: '删除' }, { label: '查看' }, { label: '复制' }]"
      @select="choose1 = $event.label"
    >
      <h2>{{ choose1 }}</h2>
    </ContextMenu>
    <ContextMenu
      class="block block-2"
      :menu="[{ label: '员工' }, { label: '部门' }, { label: '角色' }, { label: '权限' }, { label: '菜单' }]"
      @select="choose2 = $event.label"
    >
      <h2>{{ choose2 }}</h2>
      <ContextMenu
        class="block block-3"
        :menu="[{ label: '菜单1' }, { label: '菜单2' }, { label: '菜单3' }, { label: '菜单4' }]"
        @select="choose3 = $event.label"
      >
        <h2>{{ choose3 }}</h2>
      </ContextMenu>
    </ContextMenu>
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
  width: 100%;
  height: 100%;
  display: flex;

  .block {
    width: 400px;
  }

  .block-1 {
    width: 400px;
    height: 400px;
    background: burlywood;
  }

  .block-1 {
    width: 400px;
    height: 400px;
    background: burlywood;
  }

  .block-2 {
    width: 400px;
    height: 400px;
    background: palegreen;
  }
  .block-3 {
    width: 400px;
    height: 200px;
    background: brown;
  }

  h2 {
    color: #f00;
  }
}
</style>
