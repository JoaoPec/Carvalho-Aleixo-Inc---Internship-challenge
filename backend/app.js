import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import scrapeRoutes from './routes/scrapeRoutes.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Use the scrape routes for handling API requests
app.use('/api', scrapeRoutes);

// Serve the main HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/views/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

