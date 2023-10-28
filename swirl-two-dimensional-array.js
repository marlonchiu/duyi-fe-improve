// https://juejin.cn/post/7248853134784561189

/**
 * 漩涡型二维数组
 *
 * @param {*} n  行数
 * @param {*} m  列数
 * @returns 返回一个 n 行 m 列的二维数组
 */
function vortex(n, m) {
  const nums = new Array(n).fill(0).map(() => new Array(m).fill(0))

  let i = 0 // 行号
  let j = 0 // 列号
  let stepI = 1 // 每次 i 增加的数字
  let stepJ = 0 // 每次 j 增加的数字
  let count = 1

  // 是否转弯
  function isTurn() {
    return !nums[j] || nums[j][i] !== 0
  }

  while (1) {
    nums[j][i] = count++
    // 改变 i 和 j
    i += stepI
    j += stepJ

    if (isTurn()) {
      i -= stepI
      j -= stepJ
      if (stepI === 0) {
        // 横向运动
        stepI = -stepJ
        stepJ = 0
      } else {
        // 纵向运动
        stepJ = stepI
        stepI = 0
      }
      i += stepI
      j += stepJ
    }
    // 转向后也没有路就退出循环
    if (isTurn()) {
      break
    }
  }
  return nums
}
console.log('vortex >>>', vortex(5, 6))
