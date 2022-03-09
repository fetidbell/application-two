'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const VERSION = '2022.55.02';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`Hello from application-two, release ${VERSION}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
