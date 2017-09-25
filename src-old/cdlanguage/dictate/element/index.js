"use strict";

export default function(dicObject ,  lineNode ){
    let value = lineNode.value;
    let slcStr = this.analyValue( value );

    let re = { 
        selector : "" ,
        el : null
    };

    slcStr = slcStr.length > 1 ? slcStr[1].trim() : "";

    if( !slcStr ) return re;

    if( slcStr.substring(0,1) == "#" ){
        slcStr = slcStr.substring(1);
    }

    re.selector = slcStr;
    if(document){
        re.el = document.getElementById( slcStr );
    }

    return re;
}