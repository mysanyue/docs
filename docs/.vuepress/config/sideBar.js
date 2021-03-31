module.exports = [
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