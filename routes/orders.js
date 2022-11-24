const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController')

router.get('/', OrderController.getAll)
router.get('/calculateTotals', OrderController.calculateTotals)
router.post('/', OrderController.create)

module.exports = router;