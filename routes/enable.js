const express = require('express');

const router = express.Router();

const restrict = require('../middlewares/restrict');
const enable = require('../controller/enable')


router.post('/api/v1/wallet',restrict, enable.enable);


module.exports = router;
