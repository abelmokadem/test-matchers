module.exports = function (config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            {
                pattern: 'test-context.js',
                watched: false
            }
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        preprocessors: {
            'test-context.js': ['webpack']
        },

        // webpack configuration
        webpack: {
            module: {
                loaders: [
                    {
                        test: /\.js/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    }
                ]
            },

            watch: true
        },

        webpackServer: {
            noInfo: true
        },

        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

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
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};