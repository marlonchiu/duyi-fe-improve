const textContainer = document.querySelector('.text-container')
const textElem = document.querySelector('.text')
const cursor = document.querySelector('.cursor')

async function autoAppend() {
  function delay(duration) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, duration)
    })
  }
  function transfer(text) {
    return `<p>${text}</p>`
  }

  const content = `党的十八大提出，倡导富强、民主、文明、和谐，倡导自由、平等、公正、法治，倡导爱国、敬业、诚信、友善，积极培育和践行社会主义核心价值观。富强、民主、文明、和谐是国家层面的价值目标，自由、平等、公正、法治是社会层面的价值取向，爱国、敬业、诚信、友善是公民个人层面的价值准则，这24个字是社会主义核心价值观的基本内容。`

  for (let i = 0; i < content.length + 1; i++) {
    const text = content.slice(0, i)
    let result = transfer(text)
    textElem.innerHTML = result
    updateCursor()
    await delay(100)
  }
}

autoAppend()

function getLastTextNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    return node
  }
  const children = node.childNodes
  for (let i = children.length - 1; i >= 0; i--) {
    const child = children[i]
    const result = getLastTextNode(child)
    if (result) {
      return result
    }
  }
  return null
}

function updateCursor() {
  // 1. 追加一个文字到末尾
  const lastTextNode = getLastTextNode(textElem)
  // console.log(lastTextNode)
  const textNode = document.createTextNode('源')
  if (lastTextNode) {
    lastTextNode.parentNode.appendChild(textNode)
  } else {
    textElem.appendChild(textNode)
  }
  // 2. 获取追加的文字位置
  // 创建(框选文字)
  const range = document.createRange()
  range.setStart(textNode, 0)
  range.setEnd(textNode, 0)
  const rect = range.getBoundingClientRect()
  // console.log(rect)

  // 3. 根据位置设置光标的位置
  const containerRect = textContainer.getBoundingClientRect()
  const x = rect.x - containerRect.x
  const y = rect.y - containerRect.y
  // console.log(x, y)
  cursor.style.transform = `translate(${x}px, ${y}px)`

  // 4. 移除追加的文字
  // textNode.parentNode.removeChild(textNode)
  textNode.remove()
}
