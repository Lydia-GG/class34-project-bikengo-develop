const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();

module.exports = {
    devtool: "eval-cheap-source-map",
    mode: "development",
    entry: path.join(__dirname, "src", "index.jsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    module: {
        rules: [{
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: ["file-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        }),
        // All variables in our .env should be mentioned here
        new webpack.EnvironmentPlugin({
            // Default is '' because on our heroku servers we want to have it default to our current URL
            BASE_SERVER_URL: "",
        }),
        new webpack.EnvironmentPlugin({
            // map access token
            REACT_APP_MAPBOX_TOKEN: process.env.REACT_APP_MAPBOX_TOKEN,
        }),
    ],
    // To tell the dev server that everything should go back to index.html
    devServer: {
        historyApiFallback: true,
    },
};