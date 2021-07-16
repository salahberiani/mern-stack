const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

const redeployRoutes = require('./routes/redeployRoutes');

const app = express();
morgan('tiny');
app.use(express.json()); // Parse json bodies

// routes
app.use('/api', redeployRoutes);

app.get('/api/hi', (req, res) => {
  res.json({ hello: 'hello world' });
});

app.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log('server listening on port 5000');
});
