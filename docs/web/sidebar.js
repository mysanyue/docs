module.exports = [
  {
    title: '面试题',
    collapsable: false,
    children: [
      {
        title: 'HTML',
        collapsable: true,
        children: [['/web/html/', 'html 基础']],
      },
      {
        title: 'CSS',
        collapsable: true,
        children: [
          ['/web/css/', 'css 基础'],
          ['/web/css/base', 'css 基础 二'],
        ],
      },
      {
        title: 'JavaScript',
        collapsable: true,
        children: [
          ['/web/js/', '基础一'],
          ['/web/js/base', '基础二'],
          ['/web/js/middle', '中级一'],
          ['/web/js/jq', 'jQuery'],
          ['/web/js/ms1', '整理的面试题一'],
          ['/web/js/ms2', '整理的面试题二'],
          ['/web/js/ms20211229', '面试题 20211229'],
          ['/web/js/ms20211230', '面试题 20211230'],
        ],
      },
      {
        title: 'Vue',
        collapsable: true,
        children: [
          ['/web/vue/core', 'Vue 原理'],
          ['/web/vue/vueCode', 'Vue 实现原理'],
        ],
      },
      {
        title: 'React',
        collapsable: true,
        children: [],
      },
      {
        title: 'Angular',
        collapsable: true,
        children: [],
      },
      {
        title: '算法',
        collapsable: true,
        children: [['/web/suanf/base', '常用算法']],
      },
      {
        title: '性能优化',
        collapsable: true,
        children: [
          ['/web/performance/net', '网络相关'],
          ['/web/performance/base', '网络常考题'],
        ],
      },
    ],
  },
]
