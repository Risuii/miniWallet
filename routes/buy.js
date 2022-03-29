const express = require('express');

const router = express.Router();

const restrict = require('../middlewares/restrict');
const buy = require('../controller/buy')


router.post('/api/v1/wallet/withdrawals',restrict, buy.buy);


module.exports = router;
