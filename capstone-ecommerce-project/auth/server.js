//Load all modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//Database Configuration
const config = require('./DB');
var User = require('./user.router');
var Purchase = require('./purchase.router');
var Product = require('./product.router');
const PORT = process.env.PORT || 5000;

mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedTopology',true);
mongoose.set('useFindAndModify',false);
mongoose.set('useCreateIndex',true);

mongoose.connect(config.DB).then(
    ()=>{console.log('Database is connected')},
    err=>{console.log('Can not connect to the database' + err)}
);

//Creating reference of express
const app = express();

//Middleware modules setup
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


let corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus:200
}

app.use(cors(corsOptions)); //Enable CORS features

app.use('/api/users',User);
app.use("/api/products", Product);
app.use("/api/purchases", Purchase);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });