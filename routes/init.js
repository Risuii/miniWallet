const express = require('express');

const router = express.Router();

const init = require('../controller/init');


router.post('/api/v1/init', init.init);
router.post('/api/v1/login', init.login);

module.exports = router;
