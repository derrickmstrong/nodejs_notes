const express = require('express'),
    app = express(),
    PORT = 8080;

app
    .get('/ping', (req, res) => {
        res.send('pong')
    })
    .listen(PORT, 'localhost')