<template>
  <div class="my-input">
    <!--
      1. 属性和事件
      2. slot
      3. ref
    -->
    <a-input ref="aInpRef" v-bind="$attrs">
      <template v-for="(value, name) in $slots" #[name]="scopeData">
        <slot :name="name" v-bind="scopeData || {}"></slot>
      </template>

      <!-- <template #prepend="scopeData">
        <slot name="prepend" v-bind="scopeData"></slot>
      </template>
      <template #append>
        <slot name="append"></slot>
      </template> -->
    </a-input>
  </div>
</template>

<script>
export default {
  props: ['val'],
  mounted() {
    console.log(this.val)
    console.log(this.$attrs)
    console.log(this.$slots)

    const aInpRef = this.$refs.aInpRef
    for (const key in aInpRef) {
      this[key] = aInpRef[key]
    }
    console.log(this)
  }
}
</script>

<style scoped>
.my-input {
  transition: 0.3s;
}
.my-input:hover,
.my-input:focus-within {
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 1));
}
</style>
