const http = require('http')
const sever = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>Home page</h1>')
    res.end()
  } else if (req.url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>About Page</h1>')
    res.end()
  } else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>Not found</h1>')
    res.end()
  }
})
sever.listen(5000, () => {
  console.log('sever is listening on 5000 port')
})
