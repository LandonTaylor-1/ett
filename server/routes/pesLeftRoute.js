const express = require('express');
const router = express.Router();
const { list, create } = require('../controllers/pesLeftController');

router.get('/pesleft', list);
router.post('/pesleft', create);

module.exports = router;