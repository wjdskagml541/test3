'use strict';

const express = require('express');

const PORT = 8089;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world test2\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);