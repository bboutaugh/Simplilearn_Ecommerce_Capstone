var mongoose = require("mongoose");
mongoose.pluralize(null);
var ProductSchema = mongoose.Schema;

var ProductSchemaRef = new ProductSchema(
    {
         productID: Number,
         productName: String,
         productPrice: Number,
         productImage: String,
         productBrand: String,
         productQuantity: Number,
         productDiscount: Number
    }
);

var ProductModel = mongoose.model("Product",ProductSchemaRef);

module.exports = ProductModel;