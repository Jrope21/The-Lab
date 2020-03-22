const path = require('path');

// process.env.NODE_ENV = 'development';

module.exports = {
    // tell webpack this is for nodeJS not browser
    target: 'node',

    // specify root file
    entry: path.resolve(__dirname, 'index.js'),

    // specify output file location
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // run babel on every file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    }
};