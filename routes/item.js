const express = require('express');
const router = express.Router();
const { getItems } = require('../controllers/itemsController');
const logMiddleware = require('../middlewares/logMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


router.use(logMiddleware);


router.get('/', getItems);

module.exports = router;