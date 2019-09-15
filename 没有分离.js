const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // production 生产 development 开发 none
    mode: 'development',
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
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            // filename: 'index.html',
            inject: true
        })
    ],
    // 服务配置
    resolve: {
        extensions: ['.js', '.jsx', '.vue', 'ts', '.tsx'],
        // 配置别名
        alias: {
            '@': path.join(process.cwd(), 'src')
        }
    },
    devServer: {
        // 域名
        host: 'localhost',
        // 端口号
        port: '8080',
        // 自动打开
        open: true,
        // 已选项卡方式打开页面
        inline: true,
        // 进度条
        progress: true,
        // 控制台不打印编译信息
        queit: false,
        // 开启GZIP压缩
        compress: true,
        // // 代理
        // proxy: {
        //     api: {
        //         target: '',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/api': ''
        //         }
        //     }
        // },
        // setup() {},
        before() {}
        // after() {}
    }
};