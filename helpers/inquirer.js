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
      { value: '0', name: `${'0.'.green} Exit` }
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

module.exports = { showMenu, pause, input }
