const express = require('express');
const validateSecret = require('../middlewares/redeployValidate');
const redeployController = require('../controllers/redeployController');

const router = express.Router();

router.post('/redeploy', validateSecret, redeployController.redeploy);

module.exports = router;
