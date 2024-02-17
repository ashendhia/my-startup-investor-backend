const express = require('express');
const router = express.Router();
const investorController = require('../controllers/investorController');

// Route for getting all startups with pagination
router.get('/', investorController.getAllInvestors);
router.get('/fundedStartups/:investorId', investorController.getInvestorFundedStartups);
router.get('/fundingRequests/:investorId', investorController.getInvestorFundingRequests);
router.post('/', investorController.postInvestor);
router.post('/login', investorController.loginInvestor)
// hello

module.exports = router;