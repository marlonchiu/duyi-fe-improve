export default class TaskRunner {
  constructor(limit = 5, debug = false) {
    if (limit < 1) {
      throw new Error('limit must be interger greater then 1')
    }
    this.queue = []
    this.activeTaskNum = 0
  }

  addTask(task) {
    task.name ? task.name : task.fn.name || this.queue.length || ''
    this.queue.push(task)
    this.runTask()
  }

  execute(task) {
    this.log(`running ${task.name}`)
    return task
      .fn()
      .then((result) => {
        this.log(`task ${task.name} finished`)
        return result
      })
      .catch((error) => {
        this.log(`${task.name} failed`)
        throw error
      })
      .finally(() => {
        this.activeTaskNum--
        this.runTask()
      })
  }

  runTask() {
    while (this.activeTaskNum < this.limit && this.queue.length > 0) {
      const task = this.queue.shift()
      this.activeTaskNum++
      this.execute(task)
    }
  }

  log(msg) {
    if (this.debug) {
      console.info(`[TaskRunner] ${msg}`)
    }
  }
}
