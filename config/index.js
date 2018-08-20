// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')  // node包，计算物理路径

// commonJS语法规范，将{}内的数据导出去，供外部文件使用
// 到出外部使用的时候require()进来
// es6模块化是export导出，import导入
module.exports = {
  // webpack生产模式的配置
  build: {
    env: require('./prod.env'), // env = ./prod.env下的{ NODE_ENV: '"production"' }
    index: path.resolve(__dirname, '../dist/index.html'),  // '__dirname'等于根目录f://vue-singlepage
    assetsRoot: path.resolve(__dirname, '../dist'),  // = 'f://vue-singlepage/dist'
    assetsSubDirectory: 'static',  // 静态文件的子目录static
    assetsPublicPath: '/',
    productionSourceMap: true,  // 生产环境下的目录映射，一般都不映射。
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,  // 生产环境是否使用Gzip压缩
    productionGzipExtensions: ['js', 'css'],  // Gzip压缩扩展文件 = 'js''css'等后缀名
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report  // 代码分块的报告，bundle：分块
  },
  // webpack开发模式的配置
  dev: {
    env: require('./dev.env'),  //把env环境标识为development
    port: 8080,  // 设置端口号8080，如果被占，自动生成为8081
    autoOpenBrowser: true,   // 是否自动打开浏览器
    assetsSubDirectory: 'static',  // 静态文件的子目录为static
    assetsPublicPath: '/',
    proxyTable: {},  // 是不是经过代理列表
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false  // 建立打包前和打包后源码的映射关系，方便调试。
  }
}
