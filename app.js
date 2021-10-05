require('colors')
const { showMenu, pause } = require('./helpers/inquirer')

const main = async () => {
  let option = ''

  do {
    option = await showMenu()
    await pause()
  } while (option !== '0')

  console.log('\nGoodbye!\n'.green)
}

console.clear()
main()
