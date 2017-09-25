'use strict';

const createTree = function( lineArr ){
    
    for(var i=0; i<lineArr.length; i++){
        
        if( i < lineArr.length-1 && lineArr[i].space < lineArr[i+1].space ){

            let space = lineArr[i+1].space;

            for( let j = i+1; j< lineArr.length; j++ ){
                if( space === lineArr[j].space ){

                    lineArr[j].parent = lineArr[i];
                    lineArr[i].subs.push( lineArr[j] );
                    lineArr[i].scopes.push( lineArr[j] );
                    let first = lineArr[j].value.substring(0,1);

                }else if( space <  lineArr[j].space ){

                    lineArr[i].scopes.push( lineArr[j] );
                
                }else if( space >  lineArr[j].space ){
                    break;
                }
            }
        }
    }
    
    return lineArr;
}

module.exports = createTree;
