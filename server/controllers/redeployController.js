const { exec } = require('child_process');

exports.redeploy = (req, res) => {
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
};
