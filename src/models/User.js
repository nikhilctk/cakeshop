const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String // 'customer' or 'admin'
});

module.exports = mongoose.model('User', UserSchema);
