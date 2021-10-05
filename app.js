require('colors')
const { showMenu, pause, input } = require('./helpers/inquirer')
const TaskList = require('./models/tasklist')

const main = async () => {
  let option = ''
  const taskList = new TaskList()

  do {
    option = await showMenu()

    switch (option) {
      case '1':
        const description = await input('Description:')
        taskList.createTask(description)
        break
      case '2':
        console.log(taskList.tasks)
        break
      case '3':
        break
      case '4':
        break
      case '5':
        break
      case '6':
        break
    }

    await pause()
  } while (option !== '0')

  console.log('\nGoodbye!\n'.green)
}

console.clear()
main()
