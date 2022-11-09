const express = require('express');
const router = require('../routes/routes');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ejs middleware for templating
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

app.use(express.static('public'));
app.use(express.static('views'));

app.use('/', router);

app.use((req, res, next) => {
  res.status(404).render('404', { pagename: 'Oops!!' });
});
module.exports = app;
