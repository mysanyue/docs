const head = require('./config/head')
const plugins = require('./config/plugins')
const nav = require('./config/nav')
const sidebar = require('./config/sidebar')

module.exports = {
  // base: '/docs/',
  title: '三月风',
  description: '海阔凭鱼跃，山高任鸟飞',
  // markdown: {
  //   lineNumbers: true, // 代码行号
  // },
  head,
  plugins,
  themeConfig: {
    lastUpdated: '更新时间',
    nav,
    sidebar
  },
  port: 1108,
  host: 'localhost'
}
