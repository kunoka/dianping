const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, 'app/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js'
  },
  module: {
    rules:[
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, 'app')], // 指定检查的目录
        options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
          formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        }
      },
      {
        test: /\.(less|css)$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
        loader: 'url-loader?limit=5000'
      }
    ]
  },
  plugins: [
    // html 模板插件
    new HtmlWebpackPlugin({
      title: 'Hello React',
      template: __dirname + '/app/index.tmpl.html'
    }),
    // 热加载插件
    new webpack.HotModuleReplacementPlugin(),

    // // 打开浏览器
    // new OpenBrowserPlugin({
    //   url: 'http://localhost:8080'
    // }),

    // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ],
  devServer: {
    proxy: {
      // 凡是 'api' 开头的http请求，都会被代理到localhost:3000
      // koa 代码在./mock目录中，启动命令为npm run mock
      // '/api': {
      //   target: 'http://localhost:3000',
      //   secure: false
      // }
    },
    contentBase: path.join(__dirname, './build'),
    port: 8080,
    open: true,
    historyApiFallback: true
  }
};