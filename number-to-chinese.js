/**
 * 数字转中文
 * @param {number} num 万亿以下正整数
 * */

function toChineseNumber(num) {
  const numStr = num
    .toString()
    .replace(/(?=(\d{4})+$)/g, ',')
    .split(',')
    .filter(Boolean)

  const chars = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  const units = ['', '十', '百', '千']
  const bigUnit = ['', '万', '亿', '兆', '京']

  function handleZero(str) {
    return str.replace(/零{2,}/g, '零').replace(/零+$/g, '')
  }

  // 四位转中文
  function _transform(n) {
    if (n === '0000') {
      return chars[0]
    }

    let result = ''
    for (let i = 0; i < n.length; i++) {
      const c = chars[+n[i]]
      let u = units[n.length - 1 - i]
      if (c === chars[0]) {
        u = ''
      }
      result += c + u
    }
    result = handleZero(result)
    return result
  }

  let result = ''
  for (let i = 0; i < numStr.length; i++) {
    const part = numStr[i]
    const c = _transform(part)
    let u = bigUnit[numStr.length - 1 - i]
    if (c === chars[0]) {
      u = ''
    }
    result += c + u
  }
  result = handleZero(result)
  return result
}

function toBigChineseNumber(num) {
  const unitMap = {
    零: '零',
    一: '壹',
    二: '貳',
    三: '參',
    四: '肆',
    五: '伍',
    六: '陸',
    七: '柒',
    八: '捌',
    九: '玖',
    十: '拾',
    百: '佰',
    千: '仟',
    万: '萬',
    亿: '億',
    兆: '兆',
    京: '京'
  }
  const result = toChineseNumber(num)

  return result
    .split('')
    .map((s) => unitMap[s])
    .join('')
}

const testNum = 123456781234
console.log(toChineseNumber(testNum))
console.log(toBigChineseNumber(testNum))
