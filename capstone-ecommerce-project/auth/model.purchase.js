var mongoose = require("mongoose");
mongoose.pluralize(null);

var PurchaseSchemaRef = mongoose.Schema(
    {
         totalPrice: Number,
         creditCardNumber: String,
         address: String
    }
);

var PurchaseModel = mongoose.model("Purchase",PurchaseSchemaRef);

module.exports = PurchaseModel;