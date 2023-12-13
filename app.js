const express = require('express')
const app = express()
const { products } = require('./data')
app.get('/', (req, res) => {
  res.send(`<h1>Home Page</h1><a href='api/v1/products'>products</a>`)
})
app.get('/api/v1/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image, price } = product
    return { id, name, image, price }
  })
  return res.json(newProducts)
})
app.get('/api/v1/products/:productID', (req, res) => {
  const { productID } = req.params
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  )
  if (singleProduct) {
    return res.json(singleProduct)
  }
  return res
    .status(200)
    .send(
      `<h1>Your request not match with any record </h1> <a href='/'>Go Home</a>`
    )
})
app.get('/api/v1/query', (req, res) => {
  console.log(req.query)
  let limitedProducts = [...products]
  const { limit, search } = req.query
  if (limit) {
    limitedProducts = limitedProducts.slice(0, Number(limit))
  }
  if (search) {
    limitedProducts = limitedProducts.filter((product) =>
      product.name.startsWith(search)
    )
  }
  if (limitedProducts.length < 1) {
    return res
      .status(200)
      .json({ message: 'requested data is not found', data: [] })
  }
  return res.status(200).json(limitedProducts)
})
app.get('*', (req, res) => {
  return res.send(`<h1>404 Resource not found </h1> <a href='/'>Go Home</a>`)
})
app.listen(5000, () => {
  console.log(`server is listening on port 5000 `)
})
