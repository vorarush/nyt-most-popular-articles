const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/, // For TypeScript files
                use: 'ts-loader', // Use ts-loader for compiling TypeScript
                exclude: /node_modules/,
            },
            {
                test: /\.css$/, // For styling files
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/, // For SCSS files
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },

        ],
    },
    // Resolve .ts, .tsx, .js extensions
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    // Development server configuration
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 3000,
        open: true, // Automatically open the browser
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // Template for HTML file
        }),
        new Dotenv(),
    ],

    // Mode: 'development' for development, 'production' for production
    mode: 'development',
}