const express = require('express');
const router = express.Router();
const { list, show, create } = require('../controllers/pesRightController');

router.get('/pesright', list);
router.get('/pesleft/:name', show)
router.post('/pesright', create);

module.exports = router;