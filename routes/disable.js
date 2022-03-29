const express = require('express');

const router = express.Router();

const restrict = require('../middlewares/restrict');
const disable = require('../controller/disable')


router.patch('/api/v1/wallet',restrict, disable.disable);


module.exports = router;
