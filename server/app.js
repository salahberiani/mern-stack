const express = require('express');
const crypto = require('crypto');
const morgan = require('morgan');

const { exec } = require('child_process');
require('dotenv').config();

const app = express();
morgan('tiny');
app.use(express.json()); // Parse json bodies

app.get('/api/hi', (req, res) => {
  res.json({ hello: 'hello world' });
});

function validateSecret(req, res, next) {
  // eslint-disable-next-line no-console
  console.log('thats mean hook is working');
  /**
   * Passing an argument to next() in middleware
   * throws an error to the error handler automatically
   */

  const payload = JSON.stringify(req.body);
  if (!payload) {
    return next('Request body empty');
  }
  const sig = `sha1=${crypto
    .createHmac('sha1', process.env.WEBHOOK_SECRET)
    .update(payload)
    .digest('hex')}`;
  if (req.headers['x-hub-signature'] === sig) {
    return next();
  }
  return next('Signatures did not match');
}

app.listen(5000, () => {
  // eslint-disable-next-line no-console
  console.log('server listening on port 5000');
});
app.post('/api/redeploy', validateSecret, (req, res) => {
  exec(
    'yarn install && cd .. && git pull && cd client && yarn install && yarn build ',
    (err, stdout, stderr) => {
      if (err) {
        // some err occurred
        // eslint-disable-next-line no-console
        console.error(err);
        res.status(403).send(err);
      } else {
        // the *entire* stdout and stderr
        // eslint-disable-next-line no-console
        console.log(`stdout: ${stdout}`);
        // eslint-disable-next-line no-console
        console.log(`stderr: ${stderr}`);
        res.status(200).send(`Auto deploy completed ${stdout} ${stderr}`);
      }
      // eslint-disable-next-line comma-dangle
    }
  );
});
