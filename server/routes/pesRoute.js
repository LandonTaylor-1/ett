const express = require('express');
const router = express.Router();
const { list, create } = require('../controllers/pesController');

router.get('/pes', list);
router.post('/pes', create);

module.exports = router;