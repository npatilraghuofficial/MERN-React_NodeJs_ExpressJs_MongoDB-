const router = require('express').Router();
const handlers = require('../model/middleware/razorpay');
router.post('/api/razorpay/create-order', (req, res) => handlers.CreateOrder(req, res));
console.log('Razorpay Routes Loaded');

module.exports = router;