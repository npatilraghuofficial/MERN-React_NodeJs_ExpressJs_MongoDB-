const Razorpay = require('razorpay')
module.exports = {
    CreateOrder: (req, res) => {
        var OrderID = 111;
        var instance = new Razorpay({
            key_id: '********************'
            key_secret: '********************'

        })
        var options = {
            amount: req.body.amount,
            receipt: req.body.receipt,
            currency: "INR",
            payment_capture: '0'
        }
        instance.orders.create(options, function (err, order) {
            res.send(order)
        })
    }
}