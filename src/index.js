require('dotenv').config() // load environment variables

const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const { Client } = require('pg');

const app = express();
const port = 3000

// Set handlebars as the view engine
app.set('views', path.join(__dirname, '../views')); // adjust path to views folder
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  const testData = {
    title: 'Links',
  }

  res.render('home', testData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
