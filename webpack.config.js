
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = (env) => {
    return {
        mode: env.mode ?? 'development',
        entry: "./src/index.js",
        output: {
            filename: "main[contenthash].js",
            path: path.resolve(__dirname, 'build'),
            clean: true
        },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],  
            },
            {
               test: /\.(png|jpg|jpeg|gif)$/i,
               type: 'asset/resource',
               generator: {
                    filename: path.resolve('images', '[name].[contenthash][ext]'),
               }
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: path.resolve('icons', '[name].[contenthash][ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: path.resolve('fonts', '[name].[contenthash][ext]'),
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'main.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
             minimizer: {
                implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                         plugins: [
                            ['gifsicle', { interlaced: true }],
                            ['jpegtran', { progressive: true }],
                            ['optipng', { optimizationLevel: 5 }],
                            ['svgo', { name: 'preset-default' }],
                        ],
                    },
                },
            }),
        ],
     },
    devServer: {
        port: 9000,
        compress: true,
        hot: true,
        open: true,
        static: {
            directory: path.resolve(__dirname, 'build'),
        },
    }
}
}