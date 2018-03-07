'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        content_scripts: './src/index.js',
        popup_scripts: './src/popup/popup.js'
    },


    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist',
        publicPath: '/',
        port: 3034
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    output: {
        filename: "[name]_bundle.js",
        path: path.resolve(__dirname, 'dist')
    },

    module:{
        rules:[
            { test: "/\.js$/", use: "babel-loader" },
            { test: "/\.json$/", use: "json" },
            { test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }  // compiles Sass to CSS
                }]
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: 'assets/'
                    }
                }

            }]
    }
};