const moment = require('moment')
moment.locale('zh-cn')

module.exports = {
  // base: '/docs/',
  title: '三月风的 doc 文档',
  description: '海阔凭鱼跃，山高任鸟飞',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '三月风' }],
    ['meta', { name: 'keywords', content: 'vuepress 三月风，的文档笔记' }]
  ],
  plugins: [
    '@vuepress/last-updated',
    {
      transformer: (timestamp) => {
        // 不要忘了安装 moment
        return moment(timestamp).format('LLLL')
      }
    }
  ],
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/logo.gif',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我', link: '/about/' },
      {
        text: 'Languages',
        items: [{
            text: 'Group1',
            items: [{ text: '首页', link: '/' },
              { text: '关于我', link: '/about/' }
            ]
          },
          {
            text: 'Group2',
            items: [{ text: '首页', link: '/' },
              { text: '关于我', link: '/about/' }
            ]
          }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/mysanyue' },
    ],
    sidebar: [
      'js',
      'js2',
      '/about/',
      {
        title: '美丽的 css', // 必要的
        path: '/css/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          '/css/c-a',
          '/css/c-b',
          '/css/c-c'
        ]
      },
    ]
  }
}
