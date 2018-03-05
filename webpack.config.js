'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist',
        publicPath: '/',
        port: 3032
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },

    module:{
        rules:[
            { test: "/\.js$/", use: "babel-loader" }
        ]
    }
}