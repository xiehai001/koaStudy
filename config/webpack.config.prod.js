const webpackMerge = require("webpack-merge");

const baseConfig = require("./webpack.config.base");

const tersetWebpackPlugin = require("terser-webpack-plugin");

const webpackConfig = webpackMerge(baseConfig, {
  mode: "production",
  stats: { children: false },
  optimization: {
    minimizer: [
      new tersetWebpackPlugin({
        terserOptions: {
          warnings: false,
          parse: {},
          compress: {
            warnings: false,
            drop_console: false, //是否注释 console
            dead_code: true,
            drop_debugger: true
          },
          output: {
            comments: false,
            beautify: false
          },
          mangle: true
        },
        parallel: true,
        sourceMap: false
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 3,
          enforce: true
        }
      }
    }
  }
});
module.exports = webpackConfig;


