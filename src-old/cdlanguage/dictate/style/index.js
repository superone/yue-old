"use strict";

export default function(dicObject , lineNode ){
    var scopes = lineNode.scopes;
    var reObj = {
        styles : ""
    }

    for( var i in scopes){
        reObj.styles += scopes[i].value;
    }

    return reObj;
}