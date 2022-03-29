const express = require('express');

const router = express.Router();

const restrict = require('../middlewares/restrict');
const add = require('../controller/addMoney')


router.post('/api/v1/wallet/deposits',restrict, add.add);


module.exports = router;
