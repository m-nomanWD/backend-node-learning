const express = require('express')
const app = express()
const authRouter = require('./express/routes/auth')
const peopleRouter = require('./express/routes/people')

const { products, people } = require('./data')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/people', peopleRouter)

app.get('*', (req, res) => {
  return res.send(`<h1>404 Resource not found </h1> <a href='/'>Go Home</a>`)
})

app.listen(5000, () => {
  console.log(`server is listening on port 5000 `)
})
