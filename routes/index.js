const express = require('express');
const allRoutes = express.Router();

const stockRoutes = require('./stock.routes');


allRoutes.use('/product', stockRoutes);


module.exports = allRoutes;