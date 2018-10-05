const express = require('express');
const app = express();
const PORT = 3000;

require('./launch')(app);

app.listen(PORT, () => {
  console.log('Server started at port', PORT, '...');
});

module.exports = app;