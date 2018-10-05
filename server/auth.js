const express = require('express');
const path = require('path');

const router = express.Router();

router.use(express.static('client'));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/index.html'));
});

module.exports = router;