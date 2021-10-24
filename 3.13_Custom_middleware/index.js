const express = require('express'),
  app = express();

// Custom middleware - each request will pass through it
app.use((req, res, next) => {
  req.user = 'Derrick Strong';
  next(); // it will pass the control to next matching route
});

app
  .get('/', (req, res) => {
    const user = req.user;
    console.log(user);
    res.send(user);
  })
  .listen(3000);
