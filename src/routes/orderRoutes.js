const express = require('express');
const { placeOrder, getOrders, updateOrder } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, placeOrder);
router.get('/', authMiddleware, getOrders);
router.put('/:id', authMiddleware, updateOrder);

module.exports = router;
