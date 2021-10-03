require('colors')
const { showMenu, pause } = require('./helpers/messages')

const main = async () => {
  let option = ''

  do {
    option = await showMenu()
    if (option !== '0') await pause()
  } while (option !== '0')

  console.log('\nGoodbye!\n'.green)
}

console.clear()
main()
