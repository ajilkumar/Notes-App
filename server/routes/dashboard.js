const express = require('express')
const router = express.Router()
const mainController = require('../controllers/dashboardController')

// Dashboard Routes
router.get('/dashboard', mainController.dashboard)

module.exports = router;