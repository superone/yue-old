    //import builder from "./builder/builder";
    //import dictate from "./dictate";
    
    //import { getMinArr , getDictateObj } from "./unit";

    //read the cdl string 
    //return a lines array
    export function cdlReader(){
        var cdlDom = document.getElementsByTagName("script");
        var sourceArr = [] , re=[];

        for( var i=0; i<cdlDom.length; i++){
            for( var j=0; j<cdlDom[i].attributes.length; j++){
                if( cdlDom[i].attributes[j].nodeValue === "text/cdl" ){
                    sourceArr.push( cdlDom[i] );
                    break;
                }
            }
        }

        sourceArr.forEach(function( v , i){
            re.push( builder( sourceArr[i].innerHTML ) );
        });

        //var source = sourceArr.length > 0 ? sourceArr[0].innerHTML : "";

        return re
    }

    //create a object of yue by dilines
    export function createObject( lines = [] ){

        let obj = {};
        let rootNodes = getMinArr( lines );

        rootNodes.forEach(function( rv , i){
            var dicObj = getDictateObj( rv.value );
            if( dicObj.dicPre === "@"){
                obj.tpllogic = dictate.run( dicObj , rv );
            }else if( dicObj.dicName ){
                obj[ dicObj.dicName ] = dictate.run( dicObj , rv );
            }
        });

        return obj;
    }
