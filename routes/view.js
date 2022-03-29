const express = require('express');

const router = express.Router();
const restrict = require('../middlewares/restrict');
const view = require('../controller/view');


router.get('/api/v1/wallet',restrict, view.view);


module.exports = router;
