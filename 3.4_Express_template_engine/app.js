const express = require('express'),
  app = express(),
  PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app
  .get('/', (req, res) => {
    res.render('index', { message: message });
  })
  .listen(PORT, err => {
    if (!err) {
      console.log(`Server running on port ${PORT}`);
    } else {
      console.log(JSON.stringify(err));
    }
  });
