//Load all modules
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = 9090;
var cors = require("cors");

//Database URL Details
var url = "mongodb://localhost:27017/ecommerceDB";

//Creating reference of express
var app = express();

//Middleware modules setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors()); //Enable CORS features

//Database connection
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});

//Connect to database
mongoose.connection;

//Coding operations
var Product = require("./product.router.js");

//Middleware
app.use("/product",Product);

//app.use("/customer",Customer); //http://localhost:9090/product

app.listen(port, ()=>console.log(`Server is running on ${port} number`));