const express = require('express');

const router = express.Router();

const home = require('../controller/home');


router.get('/', home.home);


module.exports = router;
