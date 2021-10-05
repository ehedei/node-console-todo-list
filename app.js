require('colors')
const { showMenu, pause, input, selectTaskMenu, askForSure, selectCompletedTaskMenu } = require('./helpers/inquirer')
const { saveData, loadData } = require('./helpers/io')
const TaskList = require('./models/tasklist')

const main = async () => {
  let option = ''
  const taskList = new TaskList()
  taskList.tasks = loadData()

  do {
    option = await showMenu()

    switch (option) {
      case '1':
        const description = await input('Description:')
        taskList.createTask(description)
        break
      case '2':
        console.log('\n')
        console.log(taskList.printableTasks)
        break
      case '3':
        console.log('\n')
        console.log(taskList.getCompletedTasks())
        break
      case '4':
        console.log('\n')
        console.log(taskList.getCompletedTasks(false))
        break
      case '5':
        const selection = await selectCompletedTaskMenu(taskList.tasks, 'Please, select tasks to complete:')
        const sure = await askForSure()
        if (sure) {
          taskList.setCompleted(selection)
        }

        break
      case '6':
        const deletions = await selectTaskMenu(taskList.tasks, 'Please, select tasks to delete:')
        if (deletions.length) {
          const sure = await askForSure()
          if (sure) {
            deletions.forEach(id => taskList.deleteTask(id))
          }
        }
        break
      case '7':
        saveData(JSON.stringify(taskList.tasks))
        break
    }

    await pause()
  } while (option !== '0' && option !== '7')

  console.log('\nGoodbye!\n'.green)
}

console.clear()
main()
