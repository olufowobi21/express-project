// app.js
const express = require('express');
const app = express();
const workingHours = require('./middleware/working-hours');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(workingHours);

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/our-services', (req, res) => {
  res.render('our-services');
});

app.get('/contact-us', (req, res) => {
  res.render('contact-us');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});