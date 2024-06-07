import { scrapeAmazon } from '../services/scrapeService.js';

// Controller to handle the scraping request
export const scrapeAmazonProducts = async (req, res) => {
  const { keyword } = req.query;

  // Check if the keyword query parameter is provided
  if (!keyword) {
    return res.status(400).json({ error: 'Keyword query parameter is required' });
  }

  try {
    // Call the scraping service with the provided keyword
    const products = await scrapeAmazon(keyword);
    res.json(products);
  } catch (error) {
    // Handle any errors that occur during the scraping process
    res.status(500).json({ error: 'Failed to scrape Amazon products' });
  }
};
