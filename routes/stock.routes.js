const { create, listStock} = require('../Controller/stock.Controller');
const express = require('express');
const stockRoutes = express.Routers();


stockRoutes.post('/list',listStock);
stockRoutes.post('/add', create);
module.exports = stockRoutes;