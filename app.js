const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', (req, res, next) => {
  res.send('Welcome to Brian Michael Romano\'s Portfolio');
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));