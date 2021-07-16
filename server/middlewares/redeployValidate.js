const crypto = require('crypto');

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

module.exports = validateSecret;
