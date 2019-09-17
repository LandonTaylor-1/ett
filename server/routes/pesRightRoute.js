const express = require('express');
const router = express.Router();
const { list, create } = require('../controllers/pesLeftController');

router.get('/pesright', list);
router.post('/pesright', create);

module.exports = router;