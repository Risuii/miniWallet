const express = require('express');

const router = express.Router();

const home = require('./home');
const init = require('./init');
const enable = require('./enable');
const view = require('./view');
const add = require('./add');
const buy = require('./buy');
const disable = require('./disable');

router.use('/', home);
router.use('/', init);
router.use('/', enable);
router.use('/', view);
router.use('/', add);
router.use('/', buy);
router.use('/', disable);

module.exports = router;