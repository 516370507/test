const path = require('path');
function resolve (dir) {
  return path.join(__dirname, '.', dir)
}
module.exports = {
  baseUrl: "/",
  // 输出目录
  outputDir: 'dist',
  lintOnSave: true,
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  // alias 配置
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src'))
    config.module.rules.delete("svg");    // 重点:删除默认配置中处理svg,
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons'))     // 处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
}
