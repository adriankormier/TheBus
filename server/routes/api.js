const express = require('express');
const router = express.Router();
const busStopController = require('../controllers/busStopController.js');

// Route to busStopController
router.get('/', busStopController)