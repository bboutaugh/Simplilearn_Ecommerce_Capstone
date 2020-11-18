var ProductModel = require("./model.product.js");


var StoreProductInfo = (req,res)=>
{
    let product = new ProductModel
    ({
        productID:req.body.productID,
        productName:req.body.productName,
        productPrice:req.body.productPrice,
        productImage:req.body.productImage,
        productBrand:req.body.productBrand,
        productQuantity:req.body.productQuantity,
        isOnSale:req.body.isOnSale,
        productDiscount:req.body.productDiscount,

    });

    product.save((err,result)=>
    {

        if(err)
        {
            res.json({"msg":"Id must be unique"});
        }
        else
        {
            res.json({"msg":"Record stored successfully"});
        }
    });
}

module.exports = {StoreProductInfo};