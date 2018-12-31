// 导航栏
const navLink = [
  {
    text: '游戏下载',
    link: 'https://github.com/etternagame/etterna/releases'
  },
  {
    text: '曲包下载',
    items: [
      {
        text: '国内镜像',
        link: 'https://packdl.now.sh'
      },
      {
        text: '战网',
        link: 'http://stepmaniaonline.net/index.php?page=downloads'
      },
      {
        text: 'ett官网',
        link: 'https://etternaonline.com/packs'
      },
      {
        text: 'ffr论坛',
        link: 'http://www.flashflashrevolution.com/vbz/forumdisplay.php?f=21'
      },
      {
        text: '百度盘',
        link: 'https://pan.baidu.com/s/1mh5PPCc'
      }
    ]
  }
];


// 简体中文路由
const chsRouter = [
  '',
  '/install',
  '/dlpack',
  '/keyconfig',
  '/basicoperations',
  '/settings',
  '/noteskin',
  '/ratechange',
  '/judgeswitch',
  '/multiplay'
];

// 繁體中文路由
const chtRouter = [
  '/zh/',
  '/zh/test'
];

// 多语言刷新文字提示
const pwaText = (msg, btnText) => {
  return {
    updatePopup: {
      message: msg,
      buttonText: btnText
    }
  }
}

module.exports = {
  title: 'Hello vuepress',
  description: ' ',
  base: '/guide/',
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
    repo: 'ettguidecn/guide',
    repoLabel: 'GitHub',
    locales: {
      '/': {
        lastUpdated: '上次更新',
        selectText: '选择语言',
        label: '简中',
        serviceWorker: pwaText('发现新内容可用.', '刷新'),
        nav: navLink,
        // 导航栏
        sidebar:  [{
          title: '教程',
          collapsable: false,
          serviceWorker: pwaText('发现新内容可用.', '刷新'),
          children: chsRouter
        }]
      },
      '/zh/': {
        lastUpdated: '上次更新',
        selectText: '選擇語言',
        label: '繁中',
        serviceWorker: pwaText("发现新内容可用", "刷新"),
        sidebar:  [{
          title: '教程',
          collapsable: false,
          serviceWorker: pwaText("发现新内容可用", "刷新"),
          children: chtRouter
        }]
      }
    }
  },
}
