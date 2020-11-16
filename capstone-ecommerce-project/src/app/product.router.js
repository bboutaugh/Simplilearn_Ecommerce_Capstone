var express = require("express");
var router = express.Router();
var ProductController = require("./product.controller.js");

router.post("/storeProduct", ProductController.StoreProductInfo);
module.exports = router;