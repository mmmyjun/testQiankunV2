const { name } = require('./package');


module.exports = {
  devServer: {
    // headers: {
    //   'Access-Control-Allow-Origin': '*',
    // },
  },
//   output: {
//     library: `appvue`,
//     libraryTarget: 'umd',
//     jsonpFunction: `webpackJsonp_${name}`,
//   },
//   configureWebpack: {
//     output: {
//       library: `appvue`,
//       libraryTarget: 'umd', // 把微应用打包成 umd 库格式
//       jsonpFunction: `webpackJsonp_${name}`,
//     },
//   },
};