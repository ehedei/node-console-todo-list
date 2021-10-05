const fs = require('fs')
const file = './data/data.json'

const saveData = data => {
  fs.writeFileSync(file, data);
}

const loadData = () => {
  if(fs.existsSync(file)) {
    return JSON.parse(fs.readFileSync(file, {encoding: 'utf8'}))
  } else {
    return []
  }
}

module.exports = {
  saveData,
  loadData
}