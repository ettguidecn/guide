module.exports = {
  title: 'Hello vuepress',
  description: ' ',
  lastUpdated: 'Last Updated',
  base: '/docs/',
  serviceWorker: true,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'etterna教程',
      description: '',
      
    },
    '/zh/': {
      lang: 'zh-TW',
      title: 'etterna教程',
      description: ''
    }
  },
  themeConfig: {
    displayAllHeaders: true,
    repo: 'ettguidecn/docs',
    repoLabel: 'GitHub',
    nav: [
      { text: "教程", link: '/guide/' }
    ],
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简中',
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新'
          }
        },
        sidebar: {
          '/guide/': [
            {
              title: '教程',
              collapsable: false,
              serviceWorker: {
                updatePopup: {
                  message: "发现新内容可用",
                  buttonText: "刷新"
                }
              },
              children: [
                '',
                'install',
                'dlpack',
                'noteskin',
                'multiplay'
              ]
            }
          ]
        }
      },
      '/zh/': {
        selectText: '選擇語言',
        label: '繁中',
        serviceWorker: {
          updatePopup: {
            message: '發現新內容可用.',
            buttonText: '刷新'
          }
        },
      }
    }
  },

}
