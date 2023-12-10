const { readFile, writeFile } = require('fs')
const { start } = require('repl')
console.log('starting first task')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
  } else {
    console.log(result)
  }
})
console.log('start next task')
