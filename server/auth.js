const express = require('express');
const path = require('path');

const router = express.Router();

router.use(express.static('client'));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/index.html'));
});

router.get('/authorize', (req, res) => {
  console.log('Authorizing');
});

router.get('/authenticate', (req, res) => {
  console.log('Authenticating');
});

module.exports = router;