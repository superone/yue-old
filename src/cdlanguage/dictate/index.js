"use strict";

import $element from "./element";
import $method from "./method";
import $style from "./style";
import $template from "./template";
import $tpllogic from "./tpllogic";

let object = {
    run ( dicO , lineNode ){
        //let isDictate = 
        let value = lineNode.value;

        let dicName = dicO.dicName;
        let reg = new RegExp("^\\((.+)\\)$","g");
        
        if( typeof this[dicName] == 'function'){

            return this[dicName].apply( this , arguments );

        }else if( dicO.dicPre === "@" ){

            if( dicO.appName ){
               return this.tpllogic.apply( this , arguments )
            }else{
                return null;
            }

        }else{

            return null;

        }
    },

    analyValue( value = "" ){
        return value.split(":");
    },
    //渲染元素
    element : $element,
    //方法定義
    method : $method,
    //樣式定義
    style : $style,
    //模板定義
    template : $template,
    //模板邏輯定義
    tpllogic : $tpllogic
}


export default object;