var express = require("express");
var cors = require("cors");

var app = express();

//for old version we can use body-parser to receive the requestBody
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

//for new versions these two lines are used to accept the request body from payload
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//to allow other domain to send and recieve calls or data
app.use(cors());

//use below code instead of cors()
// app.use(function(req, res, next){
//     res.header("Allow-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
// });
var productAPI = require("./controller/product.controller");
app.use("/API/products",productAPI);

app.listen(8091);
console.log("Server is up and running on port 8091");