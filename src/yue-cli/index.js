"use strict";

//import Yue from "../component";
import { cdlReader , createObject } from "../cdlanguage";

global.Yue = Yue;
global.objects = [];

window.onload = function(){

    var orderStream = cdlReader();

    orderStream.forEach(function( v , i ){
        
        var obj = createObject( v );

        new Yue( obj , 'cdl');

        // var line = findOrder( v , "$el" );
        // var template = findOrder( v , "$template" );
    
        // template = getTemplateByLine( template );
    
        // var div = document.createElement("div");
        // div.innerHTML = template;
        // var newDom = div.childNodes[0];

        // obj.el = newDom;
        // obj.stream = v;
        // obj.mapping = {};
        // updateNewDom( obj.el , obj.mapping );
    
        // if( line ){
        //     line = line.value.split(":");
        //     if( line.length > 1){
        //         let domId = line[1].trim() , dom;
        //         domId = domId.substring(0,1)==="#" ? domId.substring(1) : domId ;
    
        //         dom = document.getElementById( domId );

        //         dom.parentNode.replaceChild( newDom , dom);
        //     }
        // }

        objects.push( obj );
    });
}

function updateNewDom( el , mapping ){
    var attrs = el.attributes;

    if( attrs && attrs.length ) for(var i=0; i<attrs.length; i++){
        if( attrs[i].name.substring(0,1) === "@"){
            mapping[ attrs[i].name ] = el;
        }
    }
    
    if( el.childNodes.length > 0){
        for( var i=0; i<el.childNodes.length; i++){
            updateNewDom ( el.childNodes[i] , mapping )
        }
    }
}

function getTemplateByLine( line ){
    var str = "";
    var scopes = line.scopes;

    for( let i=0; i<scopes.length; i++){
        str += scopes[i].value;
    }

    return str;
}

function findOrder( stream = [] ,  od ){
    var len = od.length;
    for(var i=0; i<stream.length; i++){
        if( stream[i].value.substring(0,len) === od ){
            return stream[i]
        }
    }

    return null;
}