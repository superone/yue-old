'use strict';

module.exports = function( source ){

    source = source ? source : "";

    source = source.replace(/\r/g , "");

    const lines =  source.split("\n");

    var newline = [];

    lines.forEach(function(item, index){

        var o = {
            space : 0,
            value : item.trim(),
            el : null,
            type : null,
            line : index+1,
            parent : null,
            attr : [],
            key : [],
            dir : [],
            nodes : [],
            subs : [],
            scopes : []
        } , s = item;

        if( checkLine(item) ) {
           for(var i=0 , code; i<s.length; i++){
                code = s.charCodeAt(i);
                if( code === 32 ){
                    o.space++;
                }else{
                    break;                    
                };
            }
            newline.push(o);
        }
    })

    newline.forEach(function( o , i){
        o.i = i;
    });
    
    return newline;
}


function checkLine( str ){
    var flag = true;
    var line = str.trim();
    if( line.length <= 0 || line.substring(0,2) == "//" ){
        flag = false;
    }
    return flag;
}