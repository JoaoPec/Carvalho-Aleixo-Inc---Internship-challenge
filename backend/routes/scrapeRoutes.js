const express = require('express');
const router = express.Router();
const { scrapeAmazonProducts } = require('../controllers/scrapeController');

router.get('/scrape', scrapeAmazonProducts);


module.exports = router;
