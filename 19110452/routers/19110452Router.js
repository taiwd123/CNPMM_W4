const express = require('express')
const router = express.Router()
const {addFriend, getById} = require('../controllers/19110452Controller')

router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

router.get('/:id', getById)
router.post('/', addFriend)
router.post('/:id', addFriend)

module.exports = router