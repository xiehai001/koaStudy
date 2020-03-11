const webpackMerge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');

const webpackConfig = webpackMerge(baseConfig,{
    devtool:'eval-source-map',  
    mode:'development',
    stats:{children:false}
})
module.exports = webpackConfig;
