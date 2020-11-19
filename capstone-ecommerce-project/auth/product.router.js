var express = require("express");
var router = express.Router();
var ProductController = require('./product.controller');

router.post('/storeProduct',ProductController.StoreProduct);
router.get('/getProductsByBrand',ProductController.GetProductsByBrand);
router.get('/getProductsByGender',ProductController.GetProductsByGender);
router.put('/updateProduct',ProductController.UpdateProduct);
router.get('/deleteProduct/productID',ProductController.DeleteProduct);
router.get('/getProducts',ProductController.GetProducts);
router.get('/getProductByID/:productID',ProductController.GetProductByID);


module.exports = router;