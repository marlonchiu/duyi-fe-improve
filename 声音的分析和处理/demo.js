const audioFile = document.querySelector('#audio')
const cvs = document.querySelector('#canvas')
const ctx = cvs.getContext('2d')

// 初始化
let isInt = false
let dataArray, analyser
audioFile.onplay = () => {
  if (isInt) {
    return
  }
  const audCtx = new AudioContext() //创建音频上下文，类似于建立一个房子
  const source = audCtx.createMediaElementSource(audioFile) // 创建音频节点
  analyser = audCtx.createAnalyser() //对音频进行分析
  analyser.fftSize = 512 // 变换的窗口大小；默认2的几次方
  dataArray = new Uint8Array(analyser.frequencyBinCount) //代表数字里的每一项都是字节，长度为 快速傅里叶变换的图是对称的

  source.connect(analyser)
  analyser.connect(audCtx.destination) //将所有的节点连接起来

  // 初始化

  isInt = true // 已初始化
}

// 将画出的波形绘制到 canvas
function draw() {
  requestAnimationFrame(draw) // 理解为不断的递归
  // 1.清空画布
  const { width, height } = cvs
  ctx.clearRect(0, 0, width, height)
  // 如果没有初始化，则不渲染
  if (!isInt) {
    return
  }
  analyser.getByteFrequencyData(dataArray) //将分析出来的数据装订到数组中去
  // console.log(dataArray);
  // 拿到每一处理完音频的数据，因为低频太少，所有利用长度的方式给它增加视觉效果
  const len = dataArray.length / 2.5
  const barWidth = width / len / 2 // 每一条柱状图的长度，除以2是为了让左右对称的图给画出来
  ctx.fillStyle = 'skyblue'
  for (let index = 0; index < len; index++) {
    const element = dataArray[index] // 字符的长度是小于256的
    const barHeight = (element / 255) * height // 用画布的同比例去获取
    const x1 = index * barWidth + width / 2
    const x2 = width / 2 - (index + 1) * barWidth
    const y = height - barHeight
    ctx.fillRect(x1, y, barWidth - 2, barHeight)
    ctx.fillRect(x2, y, barWidth - 2, barHeight)
  }
}

draw()
