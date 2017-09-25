"use strict";

import Origin from "./origin"

class Yue extends Origin{


    constructor( opt , type = "init"){
        super();
        
        this.rootDom = null;        
        this.cdlObject = null;

        this[ type ].apply( this ,arguments );
    }

    cdl( opt , type ){
        let eles = opt.element;
        let newDom , div;

        this.cdlObject = opt;

        if( eles.el && document){

            div = document.createElement("div");
            div.innerHTML = opt.template.template;
            newDom = div.childNodes[0];
            
            this.rootDom = opt.template.dom = newDom;

            this.initTplLogic();

            eles.el.parentNode.replaceChild( newDom , eles.el);
        }
    }

    initTplLogic(){
        var root = this.rootDom;
        var mapping = {};

        update( root , mapping);

        function update( dom , mp){
            var attrs = dom.attributes;
        
            if( attrs && attrs.length ) for(var i=0; i<attrs.length; i++){
                if( attrs[i].name.substring(0,1) === "@"){
                    mp[ attrs[i].name ] = dom;
                }
            }
            
            if( dom.childNodes.length > 0){
                for( var i=0; i<dom.childNodes.length; i++){
                    update ( dom.childNodes[i] , mp )
                }
            }
        }
        this.cdlObject.template.mapping = mapping;

        let appName = this.cdlObject.tpllogic.appName;
        if( this.cdlObject.style.styles ){
            var old = document.getElementById( "__com__style__" + appName );
            if( !old ){
                var news = document.createElement("style");
                news.setAttribute("id","__com__style__" + appName);
                news.innerHTML = this.cdlObject.style.styles;

                let head = document.getElementsByTagName("head");
                head = head.length>0 ? head[0] : null;

                if( head){
                    head.append(news);
                }
            }
        }

        let methods = this.cdlObject.method;

        for( let key in mapping ){
            if( mapping.hasOwnProperty(key) ){
                let events = this.cdlObject.tpllogic.subDics[ key ].event;
                let dom = mapping[key];
                for( let ekey in events){
                    if( events.hasOwnProperty(ekey) ){
                        let evtType = ekey;
                        let evtName = events[ekey].name;
                        let params = events[ekey].params;

                        let newParams = params.join(",");
                        newParams = newParams.split(",");

                        if( methods[evtName] ){
                            dom.addEventListener( evtType , ( e )=>{
                                for(let ii=0; ii<newParams.length; ii++){
                                    if( newParams[ii] == "$event"){
                                        newParams[ii] = e;
                                    }
                                }
                                
                                methods[evtName].fn.apply( this , newParams );
                            });
                        }
                    }
                }
            }
        }
    }
}

export default Yue;