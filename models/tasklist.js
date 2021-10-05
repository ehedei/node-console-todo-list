const Task = require('./task')

class TaskList {
  constructor() {
    this._list = {}
  }

  createTask(description = '') {
    const task = new Task(description)
    this._list[task.id] = task
  }

  get tasks() {
    return Object.values(this._list)
  }

}

module.exports = TaskList