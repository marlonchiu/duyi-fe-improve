// 统计字符频率的风骚写法

// 统计下面字符串中每个字符出现的频率
const str = 'fagshsfsfsafsa'

const charCount1 = str => {
  const result = {}
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (result[char]) {
      result[char]++
    } else {
      result[char] = 1
    }
  }
  return result
}
const charCount2 = str => {
  return str.split('').reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc
  }, {})
}
const charCount3 = str => {
  return [...str].reduce((prev, cur) => (prev[cur]++ || (prev[cur] = 1), cur), {})
}

console.log(charCount1(str))
console.log(charCount2(str))
// console.log(charCount3(str))