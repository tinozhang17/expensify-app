// This is a Node.js script, so you get access to the Node modules provided.

const Path = require('path');

// Entry
module.exports = {
    entry: "./src/app.js",
    output: {
        path: Path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: Path.join(__dirname, '/public'),
        historyApiFallback: true // this tells devServer that we are going to be handlng routing through client-side code, and that it should return index.html for all 404 code.
    }
};

// Loader (This customizes what Webpack does with a particular type of files once they are loaded up


