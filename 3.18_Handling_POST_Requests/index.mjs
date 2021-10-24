// file extention is .mjs so that we can use the import statement vs. require
import express from 'express';

const app = express();

// express replaces bodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app
  .post('/', (req, res) => {
    try {
      console.log(req.body);
      res.send('Sent successfully. Check console.');
    } catch (error) {
      res.send(err);
    }
  })
  .listen(8080, 'localhost');

// In Terminal or package.json script, nodemon index.mjs
// In Postman, setup POST route (http://localhost:8080/) with x-www-form-urlencoded key/value pairs and Send
// Check console for results