const express = require('express');
const path = require('path');
const scrapeRoutes = require('./routes/scrapeRoutes');

const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../frontend/views'));

// Serve static files
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Routes
app.use('/api', scrapeRoutes);

// Serve the main page
app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
