const express = require('express'),
  cors = require('cors'),
  app = express(),
  PORT = process.env.PORT || 8080;

app.use(cors()); // for all routes

app
  .get('/', (req, res) => {
    const info = {
      string_value: 'StackOverflow',
      number_value: 8476,
    };

    // res.status(200).json(info);

    res.send(
      JSON.stringify({
        string_value: 'StackOverflow',
        number_value: 1122,
      })
    );
  })
  .listen(PORT, () => console.log(`Node.js listening on port ${PORT}`));

  // node app.js
  // localhost:8080/