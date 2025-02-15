const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    customerId: mongoose.Schema.Types.ObjectId,
    cake: String,
    status: { type: String, default: 'Pending' } // Pending, Preparing, Prepared, Delivered
});

module.exports = mongoose.model('Order', OrderSchema);
