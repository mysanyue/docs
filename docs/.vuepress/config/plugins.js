const moment = require('moment')
moment.locale('zh-cn')

module.exports = [
  ['@vuepress/last-updated', {
    transformer: (timestamp) => {
      // 不要忘了安装 moment
      return moment(timestamp).format('LLLL')
    }
  }],
  ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: {
      message: "New content is available.",
      buttonText: "Refresh"
    }
  }]
]
