const router = require('express').Router();

const Favourite = require("../models/favourite.model");

const { post, getAll } = require('./crud.controller');


router.post("/", post(Favourite));

router.get("/", getAll(Favourite));

module.exports = router;