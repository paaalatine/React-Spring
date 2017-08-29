/**
 * Created by sonya on 13.08.17.
 */

module.exports = {
    entry: {
        login: './resources/js/components/login-page',
        main: './resources/js/components/main-page'
    },
    output: {
        filename: '[name]-bundle.js',
        path: __dirname + '/resources/js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    },
    watch: true
}