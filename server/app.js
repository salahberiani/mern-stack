const express = require('express');

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
