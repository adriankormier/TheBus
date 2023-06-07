const express = require('express');
const router = express.Router();
const busStopController = require('../controllers/busStopController.js');

// Route to busStopController
router.get('/:stop', busStopController.getStopInfo, (req, res) => {
  res.status(200).send(res.locals.stopInfo)
})

//localhost:8080/mystops/19

module.exports = router;