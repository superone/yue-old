module.exports = {
    
    module: {
        loaders: [//加载器
            {test: /\.html$/, loader: 'raw'},
            {test: /\.jade$/, loader: "jade" },

            {test: /\.css$/, loader: 'style!css'},
            
            {test: /\.scss$/, loader: 'style!css!sass'},
            {test: /\.less/, loader: 'style!css!less'},
            {
                test: /\.js$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
                loader: "babel-loader",
                query: {presets: ['es2015']}
            }
        ]
    }
};
