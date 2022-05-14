const authorization = require('../middlewares/authorization');
const Address = require('../models/address.model');
const { postItem } = require('./crud.controller');

const router = require('express').Router();

router.post("/address", authorization, postItem(Address));
