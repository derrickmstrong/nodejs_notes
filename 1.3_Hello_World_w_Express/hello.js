const express = require('express'),
  app = express(),
  PORT = 3000;

app
  .get('/', (req, res) => {
    res.send('Hello World!\n');
  })
  .listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
