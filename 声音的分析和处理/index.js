// JS—音频处理（傅里叶变换） https://blog.csdn.net/xiaobai_qxjn/article/details/131104505

// 基于 Web Audio API 实现音频可视化效果 https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API

const audioEle = document.querySelector('audio')
const cvs = document.querySelector('canvas')
const ctx = cvs.getContext('2d')

// 初始化canvas的尺寸
function initCvs() {
  const size = 500
  cvs.width = size * devicePixelRatio
  cvs.height = size * devicePixelRatio
  cvs.style.width = cvs.style.height = size + 'px'
}

initCvs()

let isInit = false
let analyser, buffer

function draw(dataArr, maxValue) {
  // 如果没有初始化，则不渲染
  if (!isInit) {
    return
  }

  const LEN = dataArr.length
  for (var i = 0, x = 0; i < LEN; i++) {
    // 根据频率映射一个矩形高度
    barHeight = dataArr[i]

    // 根据每个矩形高度映射一个背景色
    var r = barHeight + 25 * (i / LEN)
    var g = 250 * (i / LEN)
    var b = 50

    // 绘制一个矩形，并填充背景色
    ctx.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')'
    ctx.fillRect(x, maxValue - barHeight, barWidth, barHeight)

    x += barWidth + 1
  }
}

draw(new Array(256).fill(0), 255)

// 语音输入(麦克风)
navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  if (isInit) {
    return
  }

  const audioCtx = new AudioContext()
  analyser = audioCtx.createAnalyser()
  analyser.fftSize = 512
  buffer = new Uint8Array(analyser.frequencyBinCount)

  const source = audioCtx.createMediaElementSource(stream)
  source.connect(analyser)

  isInit = true
})

audioEle.onplay = () => {
  if (isInit) {
    return
  }

  // 创建音频上下文
  const audioCtx = new AudioContext()
  // 创建音频分析器节点
  analyser = audioCtx.createAnalyser()
  //对音频进行分析
  analyser.fftSize = 512 // 变换的窗口大小；默认2的几次方
  buffer = new Uint8Array(analyser.frequencyBinCount) // 代表数字里的每一项都是字节，长度为 快速傅里叶变换的图是对称的

  const source = audioCtx.createMediaElementSource(audioEle)
  source.connect(analyser)

  analyser.connect(audioCtx.destination) // 将所有的节点连接起来

  isInit = true
}

function update() {
  requestAnimationFrame(update)

  if (!isInit) {
    return
  }

  analyser.getByteFrequencyData(buffer)
  console.log(buffer)
  const offset = Math.floor((buffer.length * 2) / 3)
  const dataArr = new Array(offset * 2)

  for (let i = 0; i < offset; i++) {
    dataArr[i] = dataArr[dataArr.length - i - 1] = buffer[i]
  }
  draw(buffer, 255)
}

update()
