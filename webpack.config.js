const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production', // Ensure production optimizations
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js', // Use content hashing for caching
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Cleans output folder before build
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Match .js and .jsx files
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.s?css$/, // Match .css and .scss files
                use: [
                    MiniCssExtractPlugin.loader, // Extract CSS to separate files
                    'css-loader',
                    'postcss-loader', // For autoprefixing and optimizations
                    'sass-loader', // For SCSS
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true, // Remove console logs in production
                    },
                },
            }),
            new CssMinimizerPlugin(), // Minimize CSS
        ],
        splitChunks: {
            chunks: 'all', // Split vendor and application code
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css', // Use content hashing for CSS files
            chunkFilename: '[id].[contenthash].css',
        }),
        new PurgeCSSPlugin({
            paths: glob.sync(`${path.resolve(__dirname, 'src')}/**/*`, { nodir: true }), // Remove unused CSS
            safelist: {
                standard: [/^is-visible$/, /^service-item$/], // Prevent removal of critical classes
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html', // HTML template
            inject: 'body', // Inject scripts at the end of the body
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
            },
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // Resolve these extensions
    },
};
