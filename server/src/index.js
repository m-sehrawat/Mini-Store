const express = require('express');

const app = express();

const cors = require('cors');

app.use(express.json());

app.use(cors());

const productController = require("./controllers/product.controller");

app.use("/products", productController);


module.exports = app;