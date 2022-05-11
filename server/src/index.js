const express = require('express');

const app = express();

const cors = require('cors');

app.use(express.json());

app.use(cors());

const productController = require("./controllers/product.controller");

const { Signup, Login } = require('./controllers/auth.controller');

app.use("/products", productController);

app.post("/signup", Signup);

app.post("/login", Login);

module.exports = app;