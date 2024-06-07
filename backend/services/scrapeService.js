import axios from 'axios';
import { JSDOM } from 'jsdom';

// Service to scrape Amazon products based on a keyword
export const scrapeAmazon = async (keyword) => {

    console.log('Scraping Amazon products with keyword:', keyword, '...');

    const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
    const { data } = await axios.get(url);
    const dom = new JSDOM(data);
    const document = dom.window.document;

    const productList = [];
    const products = document.querySelectorAll('.s-main-slot .s-result-item');

    // Iterate over each product listing
    products.forEach(product => {
        const title = product.querySelector('h2 .a-link-normal')?.textContent.trim();
        const rating = product.querySelector('.a-icon-alt')?.textContent.split(' ')[0];
        const reviews = product.querySelector('.a-size-small .a-link-normal')?.textContent.replace(/[^0-9]/g, '');
        const imageUrl = product.querySelector('.s-image')?.src;

        // Ensure all necessary data is present before adding to the list
        if (title && rating && reviews && imageUrl) {
            productList.push({ title, rating, reviews, imageUrl });
        }
    });

    console.log('Scraped', productList.length, 'products from Amazon');

    return productList;
};
