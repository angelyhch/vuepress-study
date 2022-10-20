const moment = require('moment')
const nav = require('./nav')

module.exports = {
  base: '/docs/',
  title: ' angel blog',
  description: '学习vuepress的demo',
  head: [
    ['meta', { name: 'author', content: 'angelyhch' }],
    ['meta', { name: 'keywords', content: 'vuepress, angelyhch' }]
  ],
  plugins: {
    'vuepress-plugin-auto-sidebar': {},
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        // 必须已经安装了moment
        moment.locale('zh-cn')
        return moment(timestamp).format('llll')
      }
    }
  },
  themeConfig: {
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Guide', link: '/guide/' },
    //   {
    //     text: 'Languages',
    //     items: [
    //       { text: 'Python', link: '/languages/python/' },
    //       { text: 'Java', link: '/languages/java/' },
    //       { text: 'C++', link: '/languages/C++/' }
    //     ]
    //   },
    //   { text: 'External', link: 'https://baidu.com' }
    // ],
    nav,
    sidebar: 'auto'
    // lastUpdated: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/docs/.vuepress/'
      }
    }
  }
}
