const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');

router.post('/order/buy', orderController.createOrder);
router.get('/orders', orderController.getOrders);

module.exports = router;
