// Add event listener to the scrape button
document.getElementById('scrapeBtn').addEventListener('click', async () => {
  const keyword = document.getElementById('keyword').value;
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  // Check if the keyword input is empty
  if (!keyword) {
    resultsDiv.innerHTML = '<p>Please enter a keyword.</p>';
    return;
  }

  try {
    // Make an AJAX request to the backend API
    const response = await fetch(`/api/scrape?keyword=${keyword}`);
    const data = await response.json();

    // Check for errors in the response
    if (data.error) {
      resultsDiv.innerHTML = `<p>${data.error}</p>`;
    } else {
      // Display the scraped products
      data.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
          <h2>${product.title}</h2>
          <img src="${product.imageUrl}" alt="${product.title}">
          <p>Rating: ${product.rating} stars</p>
          <p>Reviews: ${product.reviews}</p>
        `;
        resultsDiv.appendChild(productDiv);
      });
    }
  } catch (error) {
    // Handle any errors that occur during the fetch request
    resultsDiv.innerHTML = '<p>Failed to fetch data. Please try again later.</p>';
  }
});

