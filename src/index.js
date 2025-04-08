const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars')

const app = express();
const port = 3000

// Set handlebars as the view engine
app.set('views', path.join(__dirname, '../views')); // adjust path to views folder
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
