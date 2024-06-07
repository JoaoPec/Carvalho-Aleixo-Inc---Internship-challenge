const { scrapeAmazon } = require('../services/scrapeService');

exports.scrapeAmazonProducts = async (req, res) => {

    const { keyword } = req.query;
    if (!keyword) {
        return res.status(400).json({ error: 'Keyword query parameter is required' });
    }

    try {
        const products = await scrapeAmazon(keyword);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to scrape Amazon products' });
    }
};

