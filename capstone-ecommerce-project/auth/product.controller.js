const ProductModel = require("./model.product.js");


var StoreProduct = (req,res)=>
{
    let product = new ProductModel({
        productID: req.body.productID,
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productBrand: req.body.productBrand,
        productQuantity: req.body.productQuantity,
        productDiscount: req.body.productDiscount,
        productGender: req.body.productGender

    })

    product.save((err,result)=>{
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

var GetProducts = (req,res)=>
{
    ProductModel.find({},(err,data)=>
    {
        if(err) throw err;
        res.json(data);
    })
}

module.exports = {StoreProduct, GetProducts};