const router = require('express').Router();

const authorization = require('../middlewares/authorization');
const checkDuplicate = require('../middlewares/checkDuplicate');
const Favourite = require("../models/favourite.model");

const { postFavourite, getAll } = require('./crud.controller');


router.post("/", [authorization, checkDuplicate], postFavourite(Favourite));

router.get("/", getAll(Favourite));

module.exports = router;