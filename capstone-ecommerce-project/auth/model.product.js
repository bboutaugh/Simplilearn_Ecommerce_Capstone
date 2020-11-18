var mongoose = require("mongoose");
mongoose.pluralize(null);
var ProductSchema = mongoose.Schema;

var ProductSchemaRef = mongoose.Schema(
    {
         productID: Number,
         productName: String,
         productPrice: Number,
         productImage: String,
         productBrand: String,
         productQuantity: Number,
         productDiscount: Number,
         productGender: String
    }
);

var ProductModel = mongoose.model("Product",ProductSchemaRef);

module.exports = ProductModel;