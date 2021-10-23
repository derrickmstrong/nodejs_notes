const express = require('express');

module.exports = (options = {}) => {
  const router = express.Router();
  // Get controller
  const { service } = options;

  router.get('/greet', (req, res) => {
    res.end(service.createGreeting(req.query.name || 'Stranger'));
  });

  return router;
};
