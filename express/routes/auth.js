const express = require('express')
const router = express.Router()
const { people } = require('../../data')
router.post('/', (req, res) => {
  const { name } = req.body
  const userCheck = people.find((person) => person.name === name)
  if (userCheck) {
    res.status(200).json({
      success: true,
      message: `wellcome on the board: ${userCheck.name}`,
    })
  } else {
    res.status(401).json({ success: false, message: 'user not found' })
  }
})
module.exports = router
