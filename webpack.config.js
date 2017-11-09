const path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const fs = require("fs");

const nodeModules = {};
fs.readdirSync("node_modules")
    .filter(x => [".bin"].indexOf(x) === -1)
    .forEach((mod) => {
        nodeModules[mod] = `commonjs ${mod}`;
    });

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.ts"
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    externals: nodeModules,
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",
            }
        ]
    },
    plugins: [
        new MinifyPlugin(),
    ],
};