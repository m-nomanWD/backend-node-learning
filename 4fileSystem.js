const { readFileSync, writeFileSync, appendFile } = require('fs')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(`here is the content: ${first} ${second}`)
writeFileSync(
  './content/wfSync.txt',
  `here is the content: ${first} ${second}`,
  { flag: 'a' }
)
