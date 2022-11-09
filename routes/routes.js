const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', { pagename: 'Home' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { pagename: 'Contact Us' });
});

router.post('/contact', (req, res) => {
  const email = req.body.email;
  console.log(email);
  res.render('contact', {
    pagename: 'Contact Us',
    message: 'More info coming to ' + email,
  });
});
module.exports = router;
