var path = require('path')
var RootPath = path.join(__dirname, './')
var webpack = require('webpack')

module.exports = {
    entry: {
        app: [
            './src/app/index.js',
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://localhost:8080'
        ]
    }
    ,
    output: {
        path: path.resolve(RootPath, 'dist'),
        filename: 'bundle.js'

    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']

            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader?name=img/[name].[ext]'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]

    },
    devServer: {
        contentBase: 'server',  //Relative directory for base of server
        devtool: 'eval',
        hot: true,        //注意点2：热替换配置点2
        inline: true,
        port: 8080        //Port Number
    },
    devtool: 'eval',
    plugins: [
        //Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),//注意点3：热替换配置点3
        //Allows error warnings but does not stop compiling. Will remove when eslint is added
        new webpack.NoErrorsPlugin()
    ]
}