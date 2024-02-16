const express = require('express');
const router = express.Router();
const startupController = require('../controllers/startupController');

// Route for getting all startups with pagination
router.get('/', startupController.getAllStartups);

// Route for getting startups by sector with pagination
router.get('/sector/:sector', startupController.getStartupsBySector);

// Route for searching startups by name with pagination
router.get('/search', startupController.getStartupsByName);

// Route for fetching the economic sectors
router.get('/distinct', startupController.getStartupDistinctSectors);

module.exports = router;
