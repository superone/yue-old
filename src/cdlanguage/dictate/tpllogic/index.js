"use strict";

import { getMinArr } from "../../unit";

export default function(dicObject ,  lineNode ){
    var obj = {
        appName : dicObject.appName,
        subDics : null
    }

    let subNodes = lineNode.subs;

    let subDics = {};
    for(let i in subNodes){
        let value = subNodes[i].value.trim();
        let pre = value.substring(0,1);
        subDics[value] = {
            event : {

            }
        };

        if( pre === "@"){
            let subs = subNodes[i].subs;
            let tmp = {};

            for(let j in subs){
                let v = subs[j].value.trim();
                let arr = v.split(":");

                let preSub = arr[0].trim().substring(0,1);
                if( preSub === "&"){
                    let evn = arr[1].trim().replace(/\(.+\)/g , "");
                    let reg = new RegExp("\\((.+)\\)" , "g");
                    let params = reg.exec( arr[1].trim() );
                    params = params.length > 1 ? params[1] : "";
                    params = params ? params.trim().split(",") : [];


                    tmp[ arr[0].trim().substring(1) ] = {
                        name : evn,
                        params : params
                    };
                }
            }

            subDics[value].event = tmp;
        }
    }

    obj.subDics = subDics;

    return obj;
}