const path = require('path');

module.exports = {
    // tell webpack this is for nodeJS not browser
    target: 'node',

    // specify root file
    entry: './index.mjs',

    // specify output file location
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'buil')
    },

    // run babel on every file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] }}]
                    ]
                }
            },
            {
                test: /\.mjs?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] }}]
                    ]
                }
            },
        ]
    }
};