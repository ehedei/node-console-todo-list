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

  set tasks(array = []) {
    array.forEach(task => this._list[task.id] = task)
  }

  get printableTasks() {
    return this.tasks.reduce((printable, task, index) => printable + `${(index + 1).toString().green}. ${task.description} :: ${task.dateCompleted ? task.dateCompleted.green : 'Pendent'.red}\n`, '')
  }

  get uncompletedTasks() {
    return this.tasks.filter(task => !task.dateCompleted)
  }

  getCompletedTasks(completed = true) {
    const filteredTasks = completed ? this.tasks.filter(task => task.dateCompleted) : this.tasks.filter(task => !task.dateCompleted)

    return filteredTasks.reduce((printable, task, index) => printable + `${(index + 1).toString().green}. ${task.description} :: ${task.dateCompleted ? task.dateCompleted.green : 'Pendent'.red}\n`, '')
  }

  deleteTask(id = '') {
    delete this._list[id]
  }

  completeTask(id = '') {
    if (this._list[id]) {
      this._list[id].dateCompleted = (new Date()).toUTCString()
    }
  }

  setCompleted(ids = []) {
    const notCompletedIds = Object.keys(this._list).filter(key => !ids.includes(key))
    notCompletedIds.forEach(id => this._list[id].dateCompleted = null)
    ids.forEach(id =>  this._list[id].dateCompleted = this._list[id].dateCompleted ? this._list[id].dateCompleted : (new Date()).toUTCString())
  }

}

module.exports = TaskList