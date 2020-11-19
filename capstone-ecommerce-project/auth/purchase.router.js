var express = require("express");
var router = express.Router();
var PurchaseController = require('./purchase.controller');

router.post('/recordPurchase',PurchaseController.RecordPurchase);

module.exports = router;