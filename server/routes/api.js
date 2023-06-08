const express = require('express');
const router = express.Router();
const busStopController = require('../controllers/busStopController.js');

// Route to busStopController
router.get('/:stopNum', busStopController.getStopInfo, (req, res) => {
  console.log('BACK IN API.JS');
  res.status(200).send(res.locals.stopInfo)
})


module.exports = router;