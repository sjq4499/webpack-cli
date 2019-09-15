const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const { prod } = require('../config');

const prodConfig = {
    mode: prod.mode,
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: '../public/index.html',
            filename: 'index.html',
            inject: true
        })
    ],
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
        quiet: false,
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
module.exports = merge(baseConfig, prodConfig);