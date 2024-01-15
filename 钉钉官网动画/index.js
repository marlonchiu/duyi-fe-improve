function createAnimation(scrollStart, scrollEnd, startValue, endValue) {
  return function (x) {
    if (x < scrollStart) {
      return startValue
    }
    if (x > scrollEnd) {
      return endValue
    }

    const progress = (x - scrollStart) / (scrollEnd - scrollStart)
    return startValue + (endValue - startValue) * progress
  }
}

const animationMap = new Map()

const playGround = document.querySelector('.playground')
const list = document.querySelector('.list')
const items = document.querySelectorAll('.list-item')

function getDomAnimation(scrollStart, scrollEnd, dom) {
  scrollStart += dom.dataset.order * 600
  // 透明度动画
  const opacityAnimation = createAnimation(scrollStart, scrollEnd, 0, 1)
  const opacity = function (x) {
    return opacityAnimation(x)
  }
  const scaleAnimation = createAnimation(scrollStart, scrollEnd, 0.5, 1)

  const { clientWidth, clientHeight, offsetTop, offsetLeft } = dom
  const listRect = list.getBoundingClientRect()

  const xAnimation = createAnimation(scrollStart, scrollEnd, listRect.width / 2 - clientWidth / 2 - offsetLeft, 1)
  const yAnimation = createAnimation(scrollStart, scrollEnd, listRect.height / 2 - clientHeight / 2 - offsetTop, 1)

  const transform = function (x) {
    return `translate(${xAnimation(x)}px, ${yAnimation(x)}px) scale(${scaleAnimation(x)})`
  }

  // opacity: 0; transform: translate3d(1e-05px, -778px, 669px) scale(1.835);
  return {
    opacity,
    transform
  }
}
// 设置更新动画映射
function updateMap() {
  const playGroundRect = playGround.getBoundingClientRect()
  const scrollY = window.scrollY
  const scrollStart = playGroundRect.top + scrollY
  const scrollEnd = playGroundRect.bottom + scrollY - window.innerHeight

  for (const item of items) {
    animationMap.set(item, getDomAnimation(scrollStart, scrollEnd, item))
  }
}

// 应用动画样式  将map结构中动画的应用到DOM元素上
function updateStyles() {
  const scrollY = window.scrollY
  for (const [dom, animations] of animationMap) {
    for (const prop in animations) {
      const value = animations[prop](scrollY)
      dom.style[prop] = value
    }
  }
}
updateMap()
updateStyles()
window.addEventListener('scroll', updateStyles)
