"use strict";

import Origin from "./origin"
import { readCdl } from "../cdlanguage"

class Yue extends Origin{
    constructor( opts ){
        console.log( readCdl() );
        super();
    }
}

window.onload = ()=>{
    new Yue();
}