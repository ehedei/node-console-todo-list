require('colors')

const showMenu = () => {
  console.clear()
  console.log('='.repeat(20).green)
  console.log('Select an option'.green)
  console.log('='.repeat(20).green)
  console.log('\n')
}

module.exports = { showMenu }
