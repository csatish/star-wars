var webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name]-bundle.js',
        chunkFilename: '[name]-[hash].chunk.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    }
};
