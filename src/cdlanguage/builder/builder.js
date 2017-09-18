'use strict';

const precompiler = require("./precompile");

const createTree = require("./compile");

module.exports = function( source ){

    source = source ? source : "";

    //precompiler to lineArray
    const lines = precompiler( source );    

    return createTree( lines );
    
}