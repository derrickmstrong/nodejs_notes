const express = require('express'),
  greetMiddleware = require('./greet'),
  PORT = 8080;

express()
  // use = all HTTP methods
  .use(
    '/api/v1/',
    greetMiddleware({
      greeting: 'Greeting World!',
    })
  )
  .listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
