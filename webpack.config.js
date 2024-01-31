
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'},
                ],  
            },
            {
               test: /\.(png|jpg|jpeg|gif)$/i,
               type: 'asset/resource',
               generator: {
                    filename: path.join('assets', '[name].[contenthash][ext]'),
               }
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                    filename: path.join('assets', '[name].[contenthash][ext]'),
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: path.join('fonts', '[name].[contenthash][ext]'),
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
