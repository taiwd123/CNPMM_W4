const express = require('express');
const {getAllRequest} = require('../controllers/GetAllController');
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', getAllRequest);
// define the about route

module.exports = router