const express = require('express');
const router = express.Router();
const { list, create } = require('../controllers/pesRightController');

router.get('/pesright', list);
router.post('/pesright', create);

module.exports = router;