const router = require('express').Router()
const { people } = require('../../data')
router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: people })
})
router.get('/:id', (req, res) => {
  const { id } = req.params

  const searchedItem = people.find((person) => person.id === Number(id))
  if (!searchedItem) {
    res
      .status(404)
      .json({ success: false, message: `no person found with ${id}` })
  }
  res.status(200).json({ succcess: true, data: searchedItem })
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body
  console.log(id, name)
  const person = people.find((person) => person.id === Number(id))
  if (!person) {
    res
      .status(404)
      .json({ success: false, message: `no person found with id ${id}` })
  } else if (!name) {
    res
      .status(401)
      .json({ succcess: false, message: 'please provide the value to update' })
  } else {
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name
        return person
      }
      return person
    })
    res.status(201).json({ success: true, data: newPeople })
  }
})
module.exports = router
