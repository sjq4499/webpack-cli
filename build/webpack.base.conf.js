const path = require('path');

module.exports = {
    // 入口
    entry: path.join(__dirname, '/src/index.js'),
    // 出口
    output: {
        // 文件名
        filename: 'build.js',
        // 文件路径
        path: path.join(__dirname, 'dist')
    },
    //加载模块，配置各种loader
    module: {
        rules: [{
                test: /\.css$/,
                use: ['css-loader', 'style-loader']
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                // file-loader
                use: 'url-loader'
            },
            {
                test: /\.(eot|ttf|svg|woff2?)$/,
                use: 'url-loader'
            }
        ]
    },
    // 服务配置
    resolve: {
        extensions: ['.js', '.jsx', '.vue', 'ts', '.tsx'],
        // 配置别名
        alias: {
            '@': path.join(process.cwd(), 'src')
        }
    }
};