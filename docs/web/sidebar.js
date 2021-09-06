module.exports = [{
  title: '面试题',
  collapsable: false,
  children: [{
    title: 'HTML',
    collapsable: true,
    children: [
      ['/web/html/', 'html 基础'],
    ]
  }, {
    title: 'CSS',
    collapsable: true,
    children: [
      ['/web/css/', 'css 基础'],
    ]
  }, {
    title: 'JavaScript',
    collapsable: true,
    children: [
      ['/web/js/', '基础一'],
      ['/web/js/middle', '中级一'],
      ['/web/js/jq', 'jQuery'],
    ]
  }, {
    title: 'Vue',
    collapsable: true,
    children: [
      ['/web/vue/core', 'Vue 原理'],
      ['/web/vue/vueCode', 'Vue 实现原理']
    ]
  }, {
    title: 'React',
    collapsable: true,
    children: [
    ]
  }, {
    title: 'Angular',
    collapsable: true,
    children: [
    ]
  }, {
    title: '性能优化',
    collapsable: true,
    children: [
      ['/web/performance/net', '网络相关']
    ]
  }]
}]
