const express = require('express'),
  app = express(),
  PORT = 8080;

app.get('/names/:name', (req, res, next) => {
  if (req.params.name == 'derrick') {
    return res.send('Value Name');
  } else {
    next(new Error('Not valid name'));
  }
});
// error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  return res.status(500).send('Internal Server Occurred');
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

// node index.js
// http://localhost:8080/names/derrick
// http://localhost:8080/names/strong
