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

var GetProductByID = (req,res)=>
{
    var id = req.params.productID;
    console.log(id);
    ProductModel.find({productID:id},(err,data)=>
    {
        if(err) throw err;
        res.json(data);
    })
}

var GetProductsByGender = (req,res)=>
{
    var gender = req.body.productGender;
    ProductModel.find({productGender:gender},(err,data)=>
    {
        if(err) throw err;
        res.json(data);
    })
}

var GetProductsByBrand = (req,res)=>
{
    var brand = req.body.productBrand;
    ProductModel.find({productBrand:brand},(err,data)=>
    {
        if(err) throw err;
        res.json(data);
    })
}

var UpdateProduct = (req, res) =>
{
    var currentProductID = req.body.productID;
    var newProductPrice = req.body.productPrice;
    var newProductDiscount = req.body.productDiscount;
    var newProductQuantity = req.body.productQuantity;
    ProductModel.update({productID:currentProductID}, 
        {$set:{productPrice:newProductPrice, productDiscount:newProductDiscount, productQuantity:newProductQuantity}});
    if(result.nModified>0)
    {
        res.json({"msg":"Update successful"});
    }
    else
    {
        res.json({"msg":"Updated failed."});
    }
}

var DeleteProduct = (req,res)=> {
    var deleteID = req.body.productID;
    ProductModel.deleteOne({productID:deleteID},(err,result)=> {
        if(err) throw err;
       if(result.deletedCount>0)
       {
           res.json({"msg":"Record deleted successfully"});
       }else 
       {
           res.json({"msg":"Record not present"});
       }
    })   
}

module.exports = {StoreProduct, GetProducts, GetProductsByBrand, GetProductsByGender, GetProductByID, UpdateProduct, DeleteProduct};