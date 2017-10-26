"use strict";

const webpack = require('webpack');
const path = require('path');
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

module.exports = {

    entry: {
        'polyfills': './components/polyfills.ts',
        'angular': './components/angular.ts',
        'main': './components/main.ts',       
        'rxjs': './components/rxjs.ts',
        'vendor-general': './components/vendor-general.ts'
    },

    output: {        
        path: path.resolve(__dirname, './wwwroot/dist'),
        filename: '[name]-bundle.js',        
        chunkFilename: '[name]-chunk-[chunkhash].js', // Use [chunkhash] for cache busting on the browser.        
        // 'publicPath' is used when loading chunk files. Important: don't include a leading slash, so the path can still
        // be found when application deployed to IIS, regardles of what the application name in IIS is.
        publicPath: 'dist/'      
    },

    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [
            // Causes webpack to use 'baseUrl' from tsconfig.json for module resolution.
            new TsConfigPathsPlugin() 
        ]
    },

    module: {
        rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,                 
                    // 'angular-router-loader' needed below for lazy loading angular modules.
                    loaders: 'awesome-typescript-loader!angular2-template-loader!angular-router-loader'                    
                },
                {
                    test: /\.css$/,
                    loaders: 'css-to-string-loader!css-loader'
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                }
            ]        
    },

    plugins: [        
        new webpack.optimize.CommonsChunkPlugin({
            // This identifies the hierarchy among the bundles named in the array below.
            // Where it finds that they have shared dependencies, it removes 
            // the shared dependencies, so that they only appear in one bundle. 
            // It performs this processing from left to right.
            name: ['main', 'vendor-general', 'angular', 'rxjs', 'polyfills']
        })
    ]    
};