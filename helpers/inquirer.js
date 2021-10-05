const inquirer = require('inquirer')
require('colors')

const options = [
  {
    type: 'list',
    name: 'option',
    message: 'Please, select an option:',
    choices: [
      { value: '1', name: `${'1.'.green} Create task` },
      { value: '2', name: `${'2.'.green} Show task list` },
      { value: '3', name: `${'3.'.green} Show completed tasks` },
      { value: '4', name: `${'4.'.green} Show pending tasks` },
      { value: '5', name: `${'5.'.green} Complete task(s)` },
      { value: '6', name: `${'6.'.green} Delete task` },
      { value: '7', name: `${'0.'.green} Save changes and Exit` },
      { value: '0', name: '7. Discard changes and Exit'.grey }
    ]
  }
]

const pauseOptions = [
  {
    type: 'input',
    name: 'pause',
    message: `Press ${'ENTER'.green} to continue`,
  }
]

const showMenu = async () => {
  console.clear()
  console.log('='.repeat(21).green)
  console.log('===== Main Menu ====='.white)
  console.log('='.repeat(21).green + '\n')

  const { option } = await inquirer.prompt(options)

  return option
}

const pause = async () => {
  console.log('\n')
  const { pause } = await inquirer.prompt(pauseOptions)

  return pause
}

const input = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'answer',
      message,
      validate(value) {
        if (value.length === 0) { return 'Please, insert a value' }
        return true
      }
    }
  ]

  const { answer } = await inquirer.prompt(question)
  return answer
}

const selectTaskMenu = async (tasks = [], message) => {
  const choices = tasks.map(task => { return { value: task.id, name: task.description }})

  const options = [
    {
      type: 'checkbox',
      name: 'selections',
      message,
      choices
    }
  ]

  const { selections } = await inquirer.prompt(options)

  return selections
}

const selectCompletedTaskMenu = async (tasks = [], message) => {
  const choices = tasks.map(task => { return { value: task.id, name: task.description, checked: Boolean(task.dateCompleted) }})

  const options = [
    {
      type: 'checkbox',
      name: 'selections',
      message,
      choices
    }
  ]

  const { selections } = await inquirer.prompt(options)

  return selections
}

const askForSure = async () => {
  const options = [
    {
      type: 'confirm',
      name: 'sure',
      message: 'Are you sure?'
    }
  ]

  const { sure } = await inquirer.prompt(options)
  return sure
}

module.exports = { showMenu, pause, input, selectTaskMenu, askForSure, selectCompletedTaskMenu }
