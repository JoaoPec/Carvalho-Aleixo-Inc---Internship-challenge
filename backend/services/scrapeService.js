const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

exports.scrapeAmazon = async (keyword) => {

    const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
    const { data } = await axios.get(url);
    const dom = new JSDOM(data);
    const document = dom.window.document;

    const productList = [];
    const products = document.querySelectorAll('.s-main-slot .s-result-item');

    products.forEach(product => {
        const title = product.querySelector('h2 .a-link-normal')?.textContent.trim();
        const rating = product.querySelector('.a-icon-alt')?.textContent.split(' ')[0];
        const reviews = product.querySelector('.a-size-small .a-link-normal')?.textContent.replace(/[^0-9]/g, '');
        const imageUrl = product.querySelector('.s-image')?.src;

        if (title && rating && reviews && imageUrl) {
            productList.push({ title, rating, reviews, imageUrl });
        }
    });

    return productList;
};
