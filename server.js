const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Serve images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`VALUES магазин запущен на порту ${PORT}`);
  console.log(`Откройте http://localhost:${PORT} в браузере`);
});