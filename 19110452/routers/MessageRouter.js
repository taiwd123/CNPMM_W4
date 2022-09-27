const express = require('express');
const {messageAll, messageById} = require('../controllers/MessageController')
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
//endpoint message
router.get('/:id', messageById)

router.get('/', messageAll)
module.exports = router