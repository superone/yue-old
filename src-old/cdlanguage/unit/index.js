
export function getMinArr( arr ){

    var min = getMin( arr );

    return getArrBySpace( arr , min);

}

//return the dictate's split arr
export function getDictateSrcArr( value = ""){
    let reArr = value.split( ":" );
    return reArr;
}

export function getDictateArr( value= "" ){
    var reArr = getDictateSrcArr( value );
    for(var i = 0; i < reArr.length; i++){
        reArr[i] = reArr[i].trim();
    }

    return reArr;
}

// return dictate object by string
export function getDictateObj( value = "" ){
    if( !value ) return "";
    let reString = "";
    let arr = value.split(":");

    let typeReg = new RegExp("\\[(.+)\\]" , "g");

    let reO = {
        value : value ,
        dicPre : "",
        dicName : "",
        dicType : "",
        dicRight : "",
        appName : ""
    }
    
    reO.dicPre = arr[0].trim().substring(0,1);
    reO.dicName = arr[0].trim().substring(1).replace(/\[.*\]/g , "");

    if( typeReg.test(arr[0]) ){
        reO.dicType = typeReg.exec( arr[0] )[1];
    }

    if( reO.dicPre === "@"){
        let reg = new RegExp("^\\((.+)\\)$","g");
        let regRst = reg.exec( reO.dicName );
        if( regRst.length >1){
            reO.appName =  regRst[1].trim();
        }
    }

    reO.dicRight = arr.length>1 ? arr[1] : "";    

    return reO;
}

const getArrBySpace = function( arr   , space ){

    var rearr = [];
    space = parseInt( space );

    if( Array.isArray( arr ) && arr.length > 0 ){
        arr.forEach(function( v , i ){
            if( v.space === space ){
                rearr.push( v );
            }
        });
    }

    return rearr;
}

const getMin = function( arr ){
    var min = 100000;
    if( Array.isArray( arr ) && arr.length > 0 ){

        min = arr[0].space;

        arr.forEach(function( v , i){
            if( min > v.space ){
                min = v.space;
            }
        });
    }

    return min;

}