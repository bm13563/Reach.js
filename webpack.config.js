require("node-polyfill-webpack-plugin");

const path = require("path");
module.exports = {
    entry: "./src/index.ts",
    devtool: "source-map",

    devServer: {
        contentBase: "./dist",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, "dist"),
    },
};
