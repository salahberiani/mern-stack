const express = require('express');
const crypto = require('crypto');
const { exec } = require('child_process');
require('dotenv').config();

app.use(express.json()); //Parse json bodies
const app = express();

<<<<<<< HEAD
app.get('/api', (req, res) => {
  res.json({ hello: 'hello world' });
});

app.get('/api/test', (req, res) => {
  res.json({ test: 'test world' });
});


=======
app.get('/api/hi', (req, res) => {
  res.json({ hello: 'hello world' });
});

app.post('/api/redeploy', validateSecret, (req, res) => {
  exec('git pull && npm run post-deploy', (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err);
      res.status(403).send(err);
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      res.status(200).send(`Auto deploy completed ${stdout} ${stderr}`);
    }
  });
});

function validateSecret(req, res, next) {
  /**
   * Passing an argument to next() in middleware
   * throws an error to the error handler automatically
   */

  const payload = JSON.stringify(req.body);
  if (!payload) {
    return next('Request body empty');
  }
  let sig =
    'sha1=' + crypto.createHmac('sha1', process.env.WEBHOOK_SECRET).update(payload).digest('hex');
  if (req.headers['x-hub-signature'] == sig) {
    return next();
  } else {
    return next('Signatures did not match');
  }
}
>>>>>>> 5109b03669749565eed89125ed48ad2972615511
app.listen(5000, () => {
  console.log('server listening on port 5000');
});
