const path = require('path');

// process.env.NODE_ENV = 'development';

module.exports = {

    // specify root file
    entry: path.resolve(__dirname, 'src'),

    // specify output file location
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client-build')
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