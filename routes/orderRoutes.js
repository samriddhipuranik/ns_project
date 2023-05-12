const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');

// Route to create a new order
router.post('/order/buy', orderController.createOrder);

// Route to get all orders
router.get('/order', orderController.getAllOrders);

module.exports = router;
