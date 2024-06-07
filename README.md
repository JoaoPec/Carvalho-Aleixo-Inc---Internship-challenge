# Amazon Product Scraper

## Overview

Amazon Product Scraper is a web application that scrapes Amazon product listings from the first page of search results for a given keyword. It extracts the product title, rating, number of reviews, and product image URL, and displays this information on a user-friendly webpage.
Features

Scrapes Amazon product listings based on a user-provided keyword.
Extracts and displays product title, rating, number of reviews, and image URL.
Simple, user-friendly frontend interface.

Technologies Used

- Backend: Node.js, Express, Axios, JSDOM
- Frontend: HTML, CSS, Vanilla JavaScript, EJS

## Project Structure

### Backend

- controllers/scrapeController.js: Handles the logic for the /api/scrape endpoint.

- routes/scrapeRoutes.js: Defines the routes.

- services/scrapeService.js: Contains the scraping logic using axios and JSDOM.

- app.js: Sets up the server, middleware, and routes.

Frontend

    public/css/styles.css: Contains the CSS for styling the webpage.
    public/js/main.js: Contains the client-side JavaScript for handling the AJAX request.
    views/index.ejs: EJS template for the main page.


## Installation

1. Clone the repository:

```bash
git Clone
```

2. Install dependencies:

```bash

npm install
```

3. Start the server:

```bash
npm start
```

4. Open your browser and navigate to http://localhost:3000.

## Usage

1. Enter a keyword in the search bar and click the "Search" button.

2. Wait for the scraping process to complete.

3. View the product listings on the webpage.
