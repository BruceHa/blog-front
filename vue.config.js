// vue.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  outputDir: 'dist',
  assetsDir: 'assets',
  // filenameHashing: false, // 如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  productionSourceMap: false,
  // css相关配置
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/scss/variable.scss";
        @import "~@/scss/mixins.scss";
        `
      }
    }
  },
  // webpack 配置进行更细粒度的修改
  chainWebpack: config => {
    // 修改文件进入自定义路径
    config.resolve.alias
      .set('scss', resolve('src/scss'))
      .set('common', resolve('src/common'))
      .set('assets', resolve('src/assets'))

    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
}
