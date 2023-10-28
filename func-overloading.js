// 函数重载
const searcher = {}

function addMethod(object, name, fn) {
  const old = object[name]
  object[name] = function (...args) {
    if (args.length === fn.length) {
      return fn.apply(this, args)
    } else if (typeof old === 'function') {
      return old.apply(this, args)
    }
  }
}

// searcher.findAll = () => {
//   console.log('查询所有用户')
// }

// searcher.findByName = (name) => {
//   console.log('按照姓名查询用户')
// }

// searcher.findAll = (firstName, lastName) => {
//   console.log('按照姓和名查询用户')
// }

// searcher.findAll('marlon', 'chiu')

addMethod(searcher, 'find', () => {
  console.log('查询所有用户')
})

addMethod(searcher, 'find', (name) => {
  console.log('按照姓名查询用户')
})

addMethod(searcher, 'find', (firstName, lastName) => {
  console.log('按照姓和名查询用户')
})

searcher.find()
searcher.find('marlon')
searcher.find('marlon', 'chiu')
