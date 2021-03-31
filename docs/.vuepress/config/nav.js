module.exports = [
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
]
