const http = require('http')
const server = http.createServer((req, res) => {
  console.log('serve to request')
  res.end(`<h1>Serve to request</h1>`)
})
server.listen(5000, () => {
  console.log('server is listening on port:5000')
})
console.log('I run first')
