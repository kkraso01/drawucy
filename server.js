const express = require('express');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 3000;

// Serve the SignoTec library under its expected URL
app.use(
  '/stpadserverscript.js',
  express.static(path.join(__dirname, 'signotec', 'stpadserverscript.js'))
);

// Serve all static assets from /public
app.use(express.static(path.join(__dirname, 'public')));

// Fallback for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
