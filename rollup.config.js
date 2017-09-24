// import babel from 'rollup-plugin-babel';

// export default {
//   entry: 'exp/buildtest/index.js',
//   format: 'cjs',
//   plugins: [ babel() ],
//   dest: 'dist/rollup.test.bound.js'
// };

var rollup = require( 'rollup' );
var babel = require('rollup-plugin-babel');

rollup.rollup({
    entry: 'exp/buildtest/index.js',
    plugins: [ babel() ]
}).then( function ( bundle ) {
    bundle.write({
        format: 'cjs',
        moduleName: 'main', //umd或iife模式下，若入口文件含 export，必须加上该属性
        dest: 'dist/rollup.test.bound.js'
    });
});