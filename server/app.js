const express = require('express');
const crypto = require('crypto');
const { exec } = require('child_process');
require('dotenv').config();

app.use(express.json()); //Parse json bodies
const app = express();

app.get('/api', (req, res) => {
  res.json({ hello: 'hello world' });
});

app.get('/api/test', (req, res) => {
  res.json({ test: 'test world' });
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
