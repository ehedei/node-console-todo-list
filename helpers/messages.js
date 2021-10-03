require('colors')

const showMenu = () => {
  return new Promise(resolve => {
    console.clear()
    console.log('='.repeat(20).green)
    console.log('= Select an option ='.green)
    console.log('='.repeat(20).green + '\n')

    console.log(`${'1.'.green} Create task`)
    console.log(`${'2.'.green} Show task list`)
    console.log(`${'3.'.green} Show completed tasks`)
    console.log(`${'4.'.green} Show pending tasks`)
    console.log(`${'5.'.green} Complete task(s)`)
    console.log(`${'6.'.green} Delete task`)
    console.log(`${'0.'.green} Exit\n`)

    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    readline.question('Select an option: ', answer => {
      readline.close()
      resolve(answer)
    })
  })
}

const pause = () => {
  return new Promise(resolve => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    })

    readline.question(`\nPress ${'ENTER'.green} to continue`, () => {
      readline.close()
      resolve()
    })
  })
}

module.exports = { showMenu, pause }
