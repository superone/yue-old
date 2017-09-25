'use strict';

let treeObject = {};

const createTree = function( lineArr ){

    var minArr = getMinArr( lineArr ) , subArr;

    for(var i=0; i<minArr.length; i++){

    }

    minArr.forEach(function( ov , index ){
        subArr = getSubArr( lineArr , ov );
    });

    return subArr;

}

const getSubArr = function( arr , ov ){

   var i = ov.i , re = [];
   
   if( !arr[i+1] ) return re;

   for(var ii = i+1; ii < arr.length; ii++){
        if( arr[ii].space > ov.v.space ){
            re.push({
                i : ii , 
                v : arr[ii]
            });
        }
    }

    return re;
}

const getMinArr = function( arr , min ){
    var min = getMin( arr );
    return getArrBySpace( arr , min);
}

const getArrBySpace = function( arr   , space ){

    var rearr = [];
    space = parseInt( space );

    if( Array.isArray( arr ) && arr.length > 0 ){
        arr.forEach(function( v , i ){
            if( v.space === space ){
                rearr.push({
                    i : i,
                    v : v
                });
            }
        });
    }

    return rearr;
}

const getMin = function( arr ){

    if( Array.isArray( arr ) && arr.length > 0 ){

        var min = arr[0].space;

        arr.forEach(function( v , i){
            if( min > v.space ){
                min = v.space;
            }
        });
    }

    return min;

}

module.exports = createTree;