import express from 'express';
import { scrapeAmazonProducts } from '../controllers/scrapeController.js';

const router = express.Router();

// Define the route for scraping Amazon products
router.get('/scrape', scrapeAmazonProducts);

export default router;

