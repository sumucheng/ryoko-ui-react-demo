const base = require('./webpack.config')
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = Object.assign({}, base, {
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ryoko-ui',
            template: "index.html"
        })
    ],
})