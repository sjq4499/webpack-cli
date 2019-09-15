const baseConfig = require('./webpack.base.conf');
const merge = require('webpack-merge');
const { dev } = require('../config');

const devConfig = {
    mode: dev.mode
};
module.exports = merge(baseConfig, devConfig);