const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { resolve } = require('path')
const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './src/App.js',
    output: {
        path: resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',  // template file name
            inject: 'body',
        }),
        new CleanWebpackPlugin({ cleanAfterEveryBuildPatterns: ['dist'] })
    ],

    module: {
        rules: [
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    devServer: {
        host: 'localhost',
        port: port, open: true, hot: true,
        publicPath: '/', contentBase: './public'
    },
}