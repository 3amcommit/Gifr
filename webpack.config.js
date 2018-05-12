const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const config = {
    mode: "development",

    entry: "./src/index.ts",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './dist')
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
              }
        ]
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({ template: './src/index.html', favicon: './src/favicon.ico' }),
        new webpack.SourceMapDevToolPlugin()
    ],
};
module.exports = config;