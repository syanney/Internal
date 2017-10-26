"use strict";

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const ENV = process.env.NODE_ENV = 'production';

module.exports = webpackMerge(commonConfig, {

    plugins: [
       new webpack.optimize.UglifyJsPlugin(),
       new webpack.DefinePlugin({
           'process.env': {               
               'NODE_ENV': JSON.stringify(ENV)
           }
       })
    ]
});