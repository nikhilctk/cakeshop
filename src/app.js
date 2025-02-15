const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
