"use strict";

export default function(dicObject , lineNode ){
    var scopes = lineNode.scopes;
    var reObj = {
        template : ""
    }

    for( var i in scopes){
        reObj.template += scopes[i].value;
    }

    return reObj;
}