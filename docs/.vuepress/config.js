const head = require('./config/head')
const plugins = require('./config/plugins')
const nav = require('./config/nav')
const sidebar = require('./config/sideBar')

module.exports = {
  // base: '/docs/',
  title: '三月风的 doc 文档',
  description: '海阔凭鱼跃，山高任鸟飞',
  head,
  plugins,
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/logo.gif',
    nav,
    sidebar
  }
}
