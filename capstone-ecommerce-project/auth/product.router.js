var express = require("express");
var router = express.Router();
var ProductController = require('./product.controller');

router.post('/storeProduct',ProductController.StoreProduct);
router.get('/getProducts',ProductController.GetProducts);
module.exports = router;