"use strict";

import { getDictateArr } from "../../unit";

export default function(dicObject ,  lineNode ){
    var subs = lineNode.subs;

    var reObject = {};

    subs.forEach( function( v , i ){
        let value = v.value;
        let dicArr = getDictateArr( value );

        reObject[ dicArr[0] ] = {};
        let arrSplit = dicArr[1].split(".");

        if( dicArr.length>1 && typeof global[ dicArr[1] ] === "function" ){
            reObject[ dicArr[0] ].fn = global[ dicArr[1] ];            
        }else if( arrSplit.length > 1 ){
            let fn = global[ arrSplit[0].trim() ];
            for(let j in arrSplit){
                if(j >0) fn = fn[ arrSplit[j].trim() ];
            }

            if( typeof fn === "function"){
                reObject[ dicArr[0] ].fn = fn;  
            }
        }
    })

    return reObject;
}