const express = require('express');

module.exports = (options = {}) => {
  const router = express.Router();

  router.get('/greet', (req, res) => {
    res.end(options.greeting);
  });

  return router;
};
