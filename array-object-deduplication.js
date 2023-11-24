// 数组对象去重

const arr = [
  { a: 1, b: 2 },
  { b: 2, a: 1 },
  { b: 2, a: 1, c: { a: 1, b: 2 } },
  { b: 2, a: 1, c: { b: 2, a: 1 } }
]

const isObject = val => Object.prototype.toString.call(val) === '[object Object]'
// const isObject = val => typeof val === 'object' && val !== null

const newArr = [...arr]
for (let i = 0; i < newArr.length; i++) {
  for (let j = i + 1; j < newArr.length; j++) {
    if (equals(newArr[i], newArr[j])) {
      newArr.splice(j, 1)
      j--
    }
  }
}

function equals(val1, val2) {
  if (!isObject(val1) || !isObject(val2)) return Object.is(val1, val2)
  if (val1 === val2) return true

  const keys1 = Object.keys(val1)
  const keys2 = Object.keys(val2)
  if (keys1.length !== keys2.length) return false
  for (const key of keys1) {
    if (keys2.indexOf(key) === -1) {
      return false
    }

    const res = equals(val1[key], val2[key])
    if (!res) return false
  }
  // for (let i = 0; i < keys1.length; i++) {
  //   const key = keys1[i]
  //   if (!equals(val1[key], val2[key])) return false
  // }
  return true
}

console.log(newArr);