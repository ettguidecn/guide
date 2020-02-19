// 导航栏
const navLink = [
  {
    text: '游戏下载',
    link: 'https://github.com/etternagame/etterna/releases'
  },
  {
    text: '皮肤相关下载',
    items: [
      {
        text: 'noteskin(note皮肤)',
        link: 'https://etternaonline.com/noteskins'
      },
      {
        text: 'judgement(判定图片)',
        link: 'https://etternaonline.com/judgements'
      },
      {
        text: 'toasty(彩蛋)',
        link: 'https://etternaonline.com/toasties'
      }
    ]
  },
  {
    text: '曲包下载',
    items: [
      {
        text: '战网',
        link: 'http://stepmaniaonline.net/index.php?page=downloads'
      },
      {
        text: 'etterna官网',
        link: 'https://etternaonline.com/packs'
      },
      {
        text: 'ffr论坛',
        link: 'http://www.flashflashrevolution.com/vbz/forumdisplay.php?f=21'
      },
      {
        text: '(推荐)新百度盘(提取码yym4)',
        link: 'https://pan.baidu.com/s/1nMdVZaCqXZw3cQxK1OrCGg'
      },
      {
        text: '(旧)百度盘',
        link: 'https://pan.baidu.com/s/1mh5PPCc'
      },
      {
        text: 'etterna论坛',
        link: 'https://forums.etternaonline.com/c/posts-relating-to-charting/for-releasing-complete-packs'
      }
    ]
  }
];


// 简体中文路由
const chsRouter = [
  '',
  '/install',
  '/reglog',
  '/dlpack',
  '/theme',
  '/keyconfig',
  '/basicoperations',
  '/settings',
  '/noteskin',
  '/ratechange',
  '/judgeswitch',
  '/multiplay',
  '/ssrnorm',
  '/midgrade',
  '/compile'
];

// 繁體中文路由
const chtRouter = [
  '/zh-hant/',
];

module.exports = {
  title: '',
  description: ' ',
  theme: 'reco',
  base: '/guide/',
  plugins: ['@vuepress/last-updated'],
  locales: {
    '/': {
      lang: 'zh-hans',
      title: 'etterna教程',
      description: '',
      
    },
    '/zh-hant/': {
      lang: 'zh-hant',
      title: 'etterna教程',
      description: ''
    }
  },
  themeConfig: {
    displayAllHeaders: false,
    repo: 'ettguidecn/guide',
    repoLabel: 'GitHub',
    locales: {
      '/': {
        lastUpdated: '上次更新',
        selectText: '选择语言',
        label: '简中',
        nav: navLink,
        // 导航栏
        sidebar:  [{
          title: '教程',
          collapsable: false,
          children: chsRouter
        }]
      },
      '/zh-hant/': {
        lastUpdated: '上次更新',
        selectText: '選擇語言',
        label: '繁中',
        sidebar:  [{
          title: '教程',
          collapsable: false,
          children: chtRouter
        }]
      }
    }
  },
}
