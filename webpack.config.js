// This is a Node.js script, so you get access to the Node modules provided.

const Path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    // Entry
    return {
        entry: "./src/app.js",
        output: {
            path: Path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        watch: false,
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
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            })
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: Path.join(__dirname, '/public'),
            historyApiFallback: true, // this tells devServer that we are going to be handlng routing through client-side code, and that it should return index.html for all 404 code.
            publicPath: '/dist/' // this tells the devServer to fetch the virtual assest in the /dist directory instead of in the root of the folder
        }
    }
};






