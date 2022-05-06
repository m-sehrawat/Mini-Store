const express = require('express');

const app = express();

app.use(express.json());

const productController = require("./controllers/product.controller");

app.use("/products", productController);


module.exports = app;