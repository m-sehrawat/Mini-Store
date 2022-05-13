const express = require('express');

const app = express();

const cors = require('cors');

app.use(express.json());

app.use(cors());

const productController = require("./controllers/product.controller");
const favouriteController = require("./controllers/favourite.controller");
const cartController = require("./controllers/cart.controller");
const amountController = require("./controllers/amount.controller");
const { Signup, Login } = require('./controllers/auth.controller');

app.use("/products", productController);

app.use("/favourite", favouriteController);

app.use("/cart", cartController);

app.use("/amount", amountController);

app.post("/signup", Signup);

app.post("/login", Login);

module.exports = app;