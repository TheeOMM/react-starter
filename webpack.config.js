const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const publicPath = path.join(`${__dirname}/public`)
const config = {
    entry: path.join(`${__dirname}/index.js`),
    output: {
        filename: 'app.js',
        path: publicPath
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /nodee_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ),
    config['devtool'] = 'source-map'
} else {
    ;(config['devtool'] = 'cheap-eval-source-map'),
        (config['devServer'] = {
            contentBase: publicPath,
            historyApiFallback: true,
            port: 4000
        })
}

module.exports = config
