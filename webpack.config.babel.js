const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const productionPublicPath = '/beStarOnline';
const devPublicPath = '/';
const isDevMode = process.env.mode === 'DEV';
console.log('------ webpack in mode: ' + process.env.mode);

const HtmlWebpackPluginConfig_Index = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body',
});

const styleLoader = {
    loader: 'style-loader',
    options: {
        singleton: true,
    },
};

const devServerConf = {
    contentBase: path.join(__dirname, 'client'),
    noInfo: false,
    watchContentBase: true,
    hot: true,
    inline: true,
    port: 3000,
    stats: 'minimal',
    historyApiFallback: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
};

const baseConfig = {
    entry: {
        index: './client/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: (isDevMode) ? devPublicPath : productionPublicPath,
    },
    watch: isDevMode,
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      presets: ['react'],
                    },
                  },
                ],
            },
            {
                test: /\.css$/,
                use: [styleLoader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [styleLoader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff2|ttf|woff|eot)$/,
                loader: 'url-loader',
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        HtmlWebpackPluginConfig_Index,
        new webpack.HotModuleReplacementPlugin(),
    ],
};

let result = baseConfig;

if (isDevMode) {
    result.devServer = devServerConf;
}

module.exports = result;
