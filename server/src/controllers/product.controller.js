const express = require('express');

const router = express.Router();

const Product = require("../models/product.model");

const { getAllPaginated } = require('./crud.controller');


router.get("/", getAllPaginated(Product));

module.exports = router;