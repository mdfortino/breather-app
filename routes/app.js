const express = require('express')
const router = express.Router();
const appController = require('../controllers/app.js')

router.get('/', appController.index);

module.exports = router; 