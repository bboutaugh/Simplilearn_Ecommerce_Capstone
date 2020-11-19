const PurchaseModel = require("./model.purchase.js");

var RecordPurchase = (req,res)=>
{
    let purchase = new PurchaseModel({
        totalPrice: req.body.totalPrice,
        creditCardNumber: req.body.creditCardNumber,
        address: req.body.address
    })

    purchase.save((err,result)=>{
        if(err)
        {
            res.json({"msg":"error"});
        }
        else
        {
            res.json({"msg":"Record stored successfully"});
        }
    });
}

module.exports = {RecordPurchase};
