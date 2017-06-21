var webpack = require('webpack');
var path = require('path');

var package = require('./package.json');

var cacheBust = process.env.npm_config_cache_bust === undefined ? "" : process.env.npm_config_cache_bust

module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "public/build/bundle.js",
        sourceMapFilename: 'public/build/bundle.map'
    },
    devtool: '#source-map',

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};

