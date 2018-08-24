const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const config = {
    entry: ['./app/js/main.js', './app/scss/main.scss'],
    output: {
        path: path.resolve(__dirname, './app/build'),
        filename: 'out.js'
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.(png|woff|woff2|otf|eot|ttf|svg|jpg)$/,
                use: 'file-loader?limit=100000'
           },
            {
                test: /\.js$/, // Check for all js files
                exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader!postcss-loader",
                }),
            }
      ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "[name].css"
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer]
            }
        })
    ],
}

module.exports = config;
