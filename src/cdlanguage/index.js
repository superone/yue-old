import builder from "./builder/builder";

export function readCdl(){
    var cdlDom = document.getElementsByTagName("script");
    var sourceArr = [];
    for( var i=0; i<cdlDom.length; i++){
        for( var j=0; j<cdlDom[i].attributes.length; j++){
            if( cdlDom[i].attributes[j].nodeValue === "text/cdl" ){
                sourceArr.push( cdlDom[i] );
                break;
            }
        }
    }
    var source = sourceArr.length > 0 ? sourceArr[0].innerHTML : "";

    return builder( source ); 
}