const path = require("path")
const webpack = require("webpack")

module.exports = (env, argv) => {
    // if the mode isn't set, defaults to `development`, 
    // this could also be `production` 
    const mode = argv.mode || "development";

    return {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "./static/frontend"),
            filename: "[name].js",
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    }
                }
            ]
        },
        optimization: {
            minimize: true,
        },
        plugins: [
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(mode),
            }),
        ],
    }
}
