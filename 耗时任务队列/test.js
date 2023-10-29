import TaskRunner from './taskRunner.js'

const runner = new TaskRunner(3, true)

console.log('runner~~', runner)
function taskGenerator(taskName, time) {
  return {
    name: taskName,
    fn: () =>
      new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve(`result for task ${taskName}`)
        }, time)
      })
  }
}

const errorTask = {
  name: 'errroTask',
  fn: () =>
    new Promise((_resolve, reject) => {
      setTimeout(() => {
        reject('errorTask failed')
      }, 3000)
    })
}

;[errorTask]
  .concat([...new Array(5).keys()].map((_value, index) => taskGenerator(index, Math.random() * 10000 + 1000)))
  .forEach((task) => runner.addTask(task))
