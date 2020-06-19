const path = require("path");

module.exports = (env, argv) => {
    const config = {
        mode: argv.mode === "production" ? "production" : "development",
        entry: {
            ol: [
                "./src/entry.js"
            ]
        },
        target: "web",
        output: {
            filename: argv.mode === "development" ? "ol-debug.js" : "ol.js",
            path: path.resolve(__dirname, "./dist")
        },

        devtool: argv.mode === "development" ? "source-map" : "none",
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }
            ]
        }
    }
    return config;
};
