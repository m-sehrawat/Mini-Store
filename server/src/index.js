const express = require('express');

const app = express();

const cors = require('cors');

app.use(express.json());

app.use(cors());

const { Signup, Login } = require('./controllers/auth.controller');
const productController = require("./controllers/product.controller");
const favouriteController = require("./controllers/favourite.controller");
const cartController = require("./controllers/cart.controller");
const amountController = require("./controllers/amount.controller");
const couponController = require("./controllers/coupon.controller");
const addressController = require("./controllers/address.controller");
const orderController = require("./controllers/order.controller");

app.post("/signup", Signup);

app.post("/login", Login);

app.use("/products", productController);

app.use("/favourite", favouriteController);

app.use("/cart", cartController);

app.use("/amount", amountController);

app.use("/coupon", couponController);

app.use("/address", addressController);

app.use("/orders", orderController);


module.exports = app; 