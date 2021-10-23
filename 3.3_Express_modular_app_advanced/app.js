const express = require('express'),
  greetMiddleware = require('./greet'),
  PORT = 8080;

class GreetingService {
  constructor(greeting = 'Hello') {
    this.greeting = greeting;
  }

  createGreeting(name) {
    return `${this.greeting}, ${name}!`;
  }
}

express()
  .use(
    '/api/v1/service1',
    greetMiddleware({
      service: new GreetingService('Hello'),
    })
  )
  .use(
    '/api/v1/service2',
    greetMiddleware({
      service: new GreetingService('Hi'),
    })
  )
  .listen(PORT, () => console.log(`Server running on port ${PORT}`));

// node app.js
// http://localhost:8080/api/v1/service1/greet?name=Derrick
// http://localhost:8080/api/v1/service2/greet?name=Derrick
