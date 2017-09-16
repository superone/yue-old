const fs = require("fs");
const path = require("path");

var source =  fs.readFileSync( path.join( __dirname, "./template.tpl") , "utf-8");

 console.log( source );//builder(source) )