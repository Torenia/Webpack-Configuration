const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        admin: './src/scripts/admin.ts',
        visitor: './src/scripts/visitor.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader']
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader'
            }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunks: [],
            filename: './index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/app.html',
            chunks: ['common', 'admin'],
            filename: './html/admin.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/app.html',
            chunks: ['common', 'visitor'],
            filename: './html/visitor.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    output: {
        filename: './scripts/[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        chunkFilename: '[name].bundle.js',
    },
    optimization: {
        minimize: false,
        splitChunks: {
          cacheGroups: {
            default: false,
            commons: {
              chunks: 'all',
              minChunks: 2,
              name: 'common',
              enforce: true,
            },
          },
        },
      },
};
