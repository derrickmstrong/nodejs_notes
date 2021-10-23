const express = require('express'),
  app = express(),
  PORT = 8080;

app.use('/api', express.static('public'));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// node server.js
// http://localhost:8080/api/cookie_monster.png
