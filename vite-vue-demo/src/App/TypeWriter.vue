<template>
  <div class="container">
    <!-- 光标 -->
    <div class="cursor" :class="{ 'cursor-active': classComputed }" :style="styleComputed"></div>
    <div class="text">
      {{ newText }}
      <!-- 光标跟随span元素 -->
      <span ref="getSpanElementNode"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, computed } from 'vue'
//文本数据
const text = `不必说碧绿的菜畦，光滑的石井栏，高大的皂荚树，紫红的桑椹;
  也不必说鸣蝉在树叶里长吟，肥胖的黄蜂伏在菜花上，轻捷的叫天子(云雀)忽然从草间直窜向云霄里去了。
  单是周围的短短的泥墙根一带，就有无限趣味。油蛉在这里低唱，蟋蟀们在这里弹琴。
  翻开断砖来，有时会遇见蜈蚣;
  还有斑蝥，倘若用手指按住它的脊梁，便会拍的一声，从后窍喷出一阵烟雾。
  何首乌藤和木莲藤缠络着，木莲有莲房一般的果实，何首乌有拥肿的根。
  有人说，何首乌根是有象人形的，吃了便可以成仙，我于是常常拔它起来，
  牵连不断地拔起来，也曾因此弄坏了泥墙，却从来没有见过有一块根象人样。
  如果不怕刺，还可以摘到覆盆子，象小珊瑚珠攒成的小球，又酸又甜，色味都比桑椹要好得远。`
//展示数据
const newText = ref<string>('')
//获取span元素
const getSpanElementNode = ref<any>(null)
//光标位置数据类型
type cursorPositionDataType = {
  x: number
  y: number
}
//光标位置
const cursorPosition = reactive<cursorPositionDataType>({
  x: 0,
  y: 0
})
//class样式是否添加计算
const classComputed = computed((): boolean => {
  return newText.value.length === text.length
})
//光标位置样式计算
const styleComputed = computed((): any => {
  return { transform: `translate(${cursorPosition.x}px,${cursorPosition.y}px)` }
})
onMounted(() => {
  fn(140)
})
//打字机
const fn = (time: number) => {
  //计数器
  let counter: number = 0
  //定时器
  let timer: any
  //打字机效果函数
  const typeWriter = () => {
    //计数器大于字符串长度视为结束
    if (counter > text.length - 1) {
      //清除定时器
      clearInterval(timer)
      return
    }
    //拼接字符串
    newText.value += text[counter]
    //计数器+1
    counter++
    //调用获取元素位置函数
    getElementLocation()
  }
  //定时执行函数
  timer = setInterval(typeWriter, time)
}
//获取元素位置作为光标移动的位置
const getElementLocation = () => {
  if (getSpanElementNode.value !== null) {
    cursorPosition.x = getSpanElementNode.value.offsetLeft + 20
    cursorPosition.y = getSpanElementNode.value.offsetTop + 1
  }
}
</script>

<style scoped lang="scss">
// 光标闪烁动画
@keyframes flicker {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.container {
  position: relative;
  overflow: hidden;
  width: 1000px;
  height: 500px;
  margin: 20px auto;
  background-color: #fff;

  // 光标
  .cursor {
    position: absolute;
    width: 2px;
    height: 20px;
    background-color: #000;
  }

  // 光标闪烁样式
  .cursor-active {
    animation: flicker 1s infinite;
  }

  .text {
    margin: 40px;
  }
}
</style>
