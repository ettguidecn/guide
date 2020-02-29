/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4be98e49c225cc29cd3b44d0d89e6edf"
  },
  {
    "url": "assets/css/0.styles.a4d5a87d.css",
    "revision": "07b3e1cc9813200cb9b6a9f5177639d0"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.5ee11ac6.js",
    "revision": "6aebeb2eb03ae9e2255b9f22286ada3f"
  },
  {
    "url": "assets/js/10.9ea1ba3f.js",
    "revision": "5de781f955e86d1bca72327f7e9deea1"
  },
  {
    "url": "assets/js/11.d9ec132e.js",
    "revision": "5d4fb59bcde2f038d1d3d33b0b6c4455"
  },
  {
    "url": "assets/js/12.08292266.js",
    "revision": "9a37a1ed5fdbf462c6031c021d98206c"
  },
  {
    "url": "assets/js/13.8b86733d.js",
    "revision": "5f2372629354d9c008dcfefb44287550"
  },
  {
    "url": "assets/js/14.bc8702ca.js",
    "revision": "ddff17e3575608a414343d6877019c7d"
  },
  {
    "url": "assets/js/15.c0e15325.js",
    "revision": "d1e812a6094bd4637b1bed2e7d8893ed"
  },
  {
    "url": "assets/js/16.ebb7ca56.js",
    "revision": "482d1636909c7eee27ac9f4ce65f4d6c"
  },
  {
    "url": "assets/js/17.539c0f4a.js",
    "revision": "1e238b88b0f90edbc545726af017adc9"
  },
  {
    "url": "assets/js/18.3c90b2ec.js",
    "revision": "03a4a5b148a90cdbd2f60cce8dbacc43"
  },
  {
    "url": "assets/js/19.91eef349.js",
    "revision": "d58f40994af44e9f5e54db1ea56eee80"
  },
  {
    "url": "assets/js/20.2a32441f.js",
    "revision": "deb5efc21d895f23f8c963840d8a1483"
  },
  {
    "url": "assets/js/21.08eb7342.js",
    "revision": "b7864972e619a68baba421528c388176"
  },
  {
    "url": "assets/js/22.e922818f.js",
    "revision": "f9ae1f00eb74cf20863e896207659f26"
  },
  {
    "url": "assets/js/23.64822341.js",
    "revision": "42e15e81ee917377735def727e6d5af5"
  },
  {
    "url": "assets/js/24.1d094974.js",
    "revision": "48b12c093fa698441ea8450fb1485370"
  },
  {
    "url": "assets/js/25.7ff7c348.js",
    "revision": "025c1cd19c2722663ef4950171541232"
  },
  {
    "url": "assets/js/26.c51517c4.js",
    "revision": "345a3f9ff0ebbd16ba7c92a4573280ce"
  },
  {
    "url": "assets/js/27.517c72fd.js",
    "revision": "66c4b2b381120d49137e5ca35448ee40"
  },
  {
    "url": "assets/js/3.ec584b4f.js",
    "revision": "515edfa4cb7e80654c9fc08719cd7616"
  },
  {
    "url": "assets/js/4.2cb10921.js",
    "revision": "a23073be3953d2906cbcf1cb18925140"
  },
  {
    "url": "assets/js/5.062f3264.js",
    "revision": "c50541580a474b8731c5136ad6fa23d9"
  },
  {
    "url": "assets/js/6.b37a8e95.js",
    "revision": "73c287052776154e0d7c607709038833"
  },
  {
    "url": "assets/js/7.91f5a5ad.js",
    "revision": "3e4a7211128ddcce1b3da94c10073e5a"
  },
  {
    "url": "assets/js/8.6d9c8f66.js",
    "revision": "d7a8668d9c0090ad3d7f93ba887c686b"
  },
  {
    "url": "assets/js/9.b9577080.js",
    "revision": "9da2cf4bc8b31c5a06e206d57a1169cc"
  },
  {
    "url": "assets/js/app.5f0e00b5.js",
    "revision": "c0a371199357c8fe5a1f36014268c92a"
  },
  {
    "url": "basicoperations.html",
    "revision": "5d26506c9cafcfd21c39e4cdf8b3f4c1"
  },
  {
    "url": "categories/index.html",
    "revision": "366e4eaf796e15ecb05c693c3d654016"
  },
  {
    "url": "compile.html",
    "revision": "1baa8faf1e3603d1e9579d25977c01ff"
  },
  {
    "url": "dlpack.html",
    "revision": "824c6521a028a6ae06373d1a7f8b16e5"
  },
  {
    "url": "index.html",
    "revision": "084bc9d51b23b8b6d897b0720d6b5d92"
  },
  {
    "url": "install.html",
    "revision": "bd05b62f3f044eb3f4198e4a2fdf8a28"
  },
  {
    "url": "judgeswitch.html",
    "revision": "1a232b19e93094f20fbeff9dbe5a7876"
  },
  {
    "url": "keyconfig.html",
    "revision": "dd71de3880d93f26d5fef0762be6dcd6"
  },
  {
    "url": "midgrade.html",
    "revision": "2e7f39ddecd536648e5bbf77c6a408a7"
  },
  {
    "url": "multiplay.html",
    "revision": "66e289d12c2249b74429d231fa94217f"
  },
  {
    "url": "noteskin.html",
    "revision": "2202499bdf9d3bbcc76f8f8d2de51de7"
  },
  {
    "url": "ratechange.html",
    "revision": "6137806b9c66f9c19e95ea87f439b402"
  },
  {
    "url": "reglog.html",
    "revision": "84367100aef2910a7854199a350fd47d"
  },
  {
    "url": "settings.html",
    "revision": "eedfb15344e8fe2f5c88980aa3df6a16"
  },
  {
    "url": "ssrnorm.html",
    "revision": "8547115eb2957d704298b64e4b4504ba"
  },
  {
    "url": "tag/index.html",
    "revision": "366b726f5df8b7dc3a7e6ee128a4dbc5"
  },
  {
    "url": "theme.html",
    "revision": "400a9e3342a6102f34f2634198e65696"
  },
  {
    "url": "timeline/index.html",
    "revision": "fe16edcc22980b2875ac4562a233639e"
  },
  {
    "url": "zh-hant/index.html",
    "revision": "6c6e63fae6d6cbfd7c2fe7b06d9dfa1e"
  },
  {
    "url": "zhs/4k.png",
    "revision": "cb2a6e01c40d5a914db3cedf2a519147"
  },
  {
    "url": "zhs/changerate.png",
    "revision": "97dd65ef6ad7443007aaab9862904617"
  },
  {
    "url": "zhs/command.png",
    "revision": "8396600ed1fc0b1a0f82ca8b751389be"
  },
  {
    "url": "zhs/compile1.png",
    "revision": "639941e816d7adef8c9829f7c5519347"
  },
  {
    "url": "zhs/compile2.png",
    "revision": "4663993ed8f101cfe56fb23e153e6e78"
  },
  {
    "url": "zhs/compile3.png",
    "revision": "17bf0aadb60902fd538b5e63990e1f87"
  },
  {
    "url": "zhs/compile4.png",
    "revision": "4ad9465714e5a4c58e1930c53140f953"
  },
  {
    "url": "zhs/connect.png",
    "revision": "23e54b0a1414307786f5a990f43641ba"
  },
  {
    "url": "zhs/log1.png",
    "revision": "74ff32dcc72592c2e2288b547bc5b04a"
  },
  {
    "url": "zhs/midgrade1.png",
    "revision": "58ca15d14b021816f29bae5873c693c9"
  },
  {
    "url": "zhs/midgrade2.png",
    "revision": "4b0bd44a5fb5a6b3ff7fac6e409b5d17"
  },
  {
    "url": "zhs/multiinput.png",
    "revision": "c9aa1735f98966a7c3428d5babee450f"
  },
  {
    "url": "zhs/multimain.png",
    "revision": "c6123bcdcec801bf72eefe8656a8d98f"
  },
  {
    "url": "zhs/multiselect.png",
    "revision": "82220973028c28d9b74aa0c6b190043e"
  },
  {
    "url": "zhs/reg1.png",
    "revision": "00fb74e41607ba8d12835de34e048975"
  },
  {
    "url": "zhs/reg2.png",
    "revision": "a56bc502fd316cf856b046bbd6dbd91c"
  },
  {
    "url": "zhs/reg3.png",
    "revision": "39541e2cbf51729f70c51d82217e0659"
  },
  {
    "url": "zhs/ScreenGameplay-ReplayButtons.png",
    "revision": "e48dd606a10874a8e0e177eddb5fba8e"
  },
  {
    "url": "zhs/ScreenGameplay.png",
    "revision": "9aad97a897606ded7b44d59ee7068f07"
  },
  {
    "url": "zhs/ScreenSelectMusic-General.png",
    "revision": "20d8810bfb2985858392c4556af2033f"
  },
  {
    "url": "zhs/ScreenSelectMusic-Goals.png",
    "revision": "4e02784af0e25a1e1f9274a4730f6d73"
  },
  {
    "url": "zhs/ScreenSelectMusic-HelpMenu.png",
    "revision": "63508280068540f161e8797643698143"
  },
  {
    "url": "zhs/ScreenSelectMusic-LeftArea.png",
    "revision": "f3aa00be924b6dcd528fa6f6ea6385d3"
  },
  {
    "url": "zhs/ScreenSelectMusic-MSD.png",
    "revision": "b995a079f3a9f25c131ee6a746aa3360"
  },
  {
    "url": "zhs/ScreenSelectMusic-Profile.png",
    "revision": "7ea4abd4dfd275ef88e866699de01392"
  },
  {
    "url": "zhs/ScreenSelectMusic-Scores.png",
    "revision": "fdab7ae5e1b9b7e4dbf04b0482766488"
  },
  {
    "url": "zhs/ScreenSelectMusic-Search.png",
    "revision": "cdcadf5a19a4ed2556370e60b52d11ae"
  },
  {
    "url": "zhs/ScreenSelectMusic-Tabs.png",
    "revision": "997eee5c90460eef430b026d39dc8063"
  },
  {
    "url": "zhs/ScreenSelectMusic-Tags.png",
    "revision": "8607dad2ab00114ace547ce8db1cc625"
  },
  {
    "url": "zhs/ScreenSelectMusic.png",
    "revision": "90ac85922800fed4802e98e0b63559e7"
  },
  {
    "url": "zhs/scwh1.png",
    "revision": "0d76c3895c9508c00e0cae5c7150e9e2"
  },
  {
    "url": "zhs/scwh2.png",
    "revision": "ac83c7b0d3a46e5a24e62f1bb51f5cd1"
  },
  {
    "url": "zhs/scwh3.png",
    "revision": "f1ae76ce123337316cc526f0a08e000c"
  },
  {
    "url": "zhs/scwh4.png",
    "revision": "505db1848b93ff8779162638e5f2d042"
  },
  {
    "url": "zhs/scwh5.png",
    "revision": "907d8909a438e484503d115879ce50e7"
  },
  {
    "url": "zhs/Settings-CustomOption.png",
    "revision": "919b6c18b2fe559b12fb0fc6eed50e66"
  },
  {
    "url": "zhs/Settings-Example.png",
    "revision": "a57b5329241ae5fab7bea6cd74930324"
  },
  {
    "url": "zhs/spl1.png",
    "revision": "0bdc9ea8855ddaeb548dedd7ee616bdb"
  },
  {
    "url": "zhs/spl2.png",
    "revision": "4551c0fd8c04c4592f5a117d2784d6f5"
  },
  {
    "url": "zhs/spl3.png",
    "revision": "1347975355ae73a3e897ac8510f71319"
  },
  {
    "url": "zhs/spl4.png",
    "revision": "a6e559c88e3e70b6816d9c3ed0c9eedf"
  },
  {
    "url": "zhs/spl5.png",
    "revision": "c6b6cd8a06083853c934c64782637b50"
  },
  {
    "url": "zhs/ssrnorm1.png",
    "revision": "4109ad2418edac09ed7322e644f611f7"
  },
  {
    "url": "zhs/ssrnorm2.png",
    "revision": "62236625c81a950234b2a85964e60186"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
