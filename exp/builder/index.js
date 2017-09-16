const fs = require("fs");
const path = require("path");
const builder = require("./builder");
const $ = require("jquery");


//var dom = $("<div>dddd</div>");
var source =  fs.readFileSync( path.join( __dirname, "./files/ex.jx") , "utf-8");

 console.log( builder(source) );//builder(source) )