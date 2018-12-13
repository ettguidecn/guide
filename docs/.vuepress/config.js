module.exports = {
  title: 'Hello vuepress',
  description: ' ',
  lastUpdated: 'Last Updated',
  base: '/docs/',
  serviceWorker: true,
  locales: {
    '/': {
      lang: '简体中文',
      title: 'etterna教程',
      description: '',
      serviceWorker: {
        updatePopup: {
          message: "发现新内容可用.",
          buttonText: "刷新"
        }
      },
    },
    "/zh/": {
      lang: '繁体中文',
      title: 'etterna教程',
      description: ''
    }
  },
  themeConfig: {
    nav: [
      { text: "教程", link: '/guide/'}
    ],
    // displayAllHeaders: true,
    sidebar: {
      '/guide/': [
        {
          title: '教程',
          children: [
            '',
          'install',
          'dlpack'
          ]
        }
      ]
    }
  }
}