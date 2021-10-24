const express = require('express'),
 cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/setcookie', (req, res) => {
  res.cookie('username', 'D.Strong', { maxAge: 900000, httpOnly: true });
  return res.send('Cookie has been set');
});

app.get('/getcookie', (req, res) => {
  const username = req.cookies['username'];
  if (username) return res.send(username);
  return res.send('No cookie found');
});

app.listen(3000);

// npm start
// localhost:3000/setcookie
// localhost:3000/getcookie
