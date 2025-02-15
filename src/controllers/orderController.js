const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
    if (req.user.role !== 'customer') return res.status(403).json({ message: 'Unauthorized' });
    const { cake } = req.body;
    const order = new Order({ customerId: req.user.id, cake });
    await order.save();
    res.json({ message: 'Order placed successfully' });
};

exports.getOrders = async (req, res) => {
    const orders = req.user.role === 'customer'
        ? await Order.find({ customerId: req.user.id })
        : await Order.find();
    res.json(orders);
};

exports.updateOrder = async (req, res) => {
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Unauthorized' });
    const { status } = req.body;
    await Order.findByIdAndUpdate(req.params.id, { status });
    res.json({ message: 'Order updated successfully' });
};
