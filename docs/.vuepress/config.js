module.exports = {
  title: ' angel blog',
  description: '学习vuepress的demo',
  themeConfig: {
    plugins: {
      // 'vuepress-plugin-auto-sidebar': {}
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'Languages',
        items: [
          { text: 'Python', link: '/languages/python/' },
          { text: 'Java', link: '/languages/java/' },
          { text: 'C++', link: '/languages/C++/' }
        ]
      },
      { text: 'External', link: 'https://baidu.com' }
    ],
    sidebar: 'auto',
    lastUpdated: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/docs/.vuepress/'
      }
    }
  }
}
