const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Jenkins / PM2 dynamic port
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to read JSON file' });
    }

    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
