const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

module.exports = function (config) {

    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load
        files: [

            // Polyfills
            'node_modules/core-js/client/shim.js',

            // zone.js
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/proxy.js',
            'node_modules/zone.js/dist/sync-test.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',

            // RxJs
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },
            
            // Angular
            { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

            // Test files           
            { pattern: 'components/**/*spec.js', watched: false }
        ],

        // list of files to exclude
        exclude: [
        ],

        preprocessors: {            
            'components/**/*spec.js': ['webpack']
        },        

        webpack: {
            // karma watches the test entry points (you don't need to specify the entry option)
            // webpack watches dependencies          
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
            }
        },

        plugins: [
            require("karma-webpack"),
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter')
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],
        //reporters: ['verbose'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    })
}

