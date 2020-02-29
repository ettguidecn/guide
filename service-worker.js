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
    "revision": "fd3f8027f7f27edddf012f365b722a70"
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
    "url": "assets/js/10.4b0e3ffe.js",
    "revision": "4a0c7b65fd18b29dc1702fec876132c3"
  },
  {
    "url": "assets/js/11.d9ec132e.js",
    "revision": "5d4fb59bcde2f038d1d3d33b0b6c4455"
  },
  {
    "url": "assets/js/12.2d9c5c50.js",
    "revision": "912d09c20d1a109c506682ebc85484e8"
  },
  {
    "url": "assets/js/13.b2469051.js",
    "revision": "abb68ac905026928121a1d1bd207dbf0"
  },
  {
    "url": "assets/js/14.bc8702ca.js",
    "revision": "ddff17e3575608a414343d6877019c7d"
  },
  {
    "url": "assets/js/15.df0b3ffa.js",
    "revision": "546e18e2e42f952fa2a6023cf163699b"
  },
  {
    "url": "assets/js/16.8ede12b7.js",
    "revision": "fe08e7d4ff91ce2e26a44e980b46e664"
  },
  {
    "url": "assets/js/17.361af7e0.js",
    "revision": "b712960148b6341c6d9788b3ffb59201"
  },
  {
    "url": "assets/js/18.279f37de.js",
    "revision": "f673101f716bbb33b33ebb1c2229e85c"
  },
  {
    "url": "assets/js/19.afb1a223.js",
    "revision": "aed61723b79b3588c588949caa761756"
  },
  {
    "url": "assets/js/20.26378664.js",
    "revision": "78cdd1a7c018ef8f4d3168bbe6ddbda3"
  },
  {
    "url": "assets/js/21.09ef8033.js",
    "revision": "52c99208b7fbec6ba6c79237ed2f4b8b"
  },
  {
    "url": "assets/js/22.7448c089.js",
    "revision": "40f84cd4465606d3cafdc063c11f1401"
  },
  {
    "url": "assets/js/23.a78e5ec5.js",
    "revision": "236b5d41f30193b2129cfe3633434579"
  },
  {
    "url": "assets/js/24.56357d97.js",
    "revision": "ba0653f2ee18c55ab9b13e65aa7d16f8"
  },
  {
    "url": "assets/js/25.ca7eb731.js",
    "revision": "1cc4b0b10b95ccdb5114f3e3eda25677"
  },
  {
    "url": "assets/js/26.37d9da2b.js",
    "revision": "d45eb367fca734a0b9f8220471f746d7"
  },
  {
    "url": "assets/js/27.e17b1c2a.js",
    "revision": "eb42f0f7ef3c678327843b21717c8dc2"
  },
  {
    "url": "assets/js/28.84fa8704.js",
    "revision": "d583fcc8daf2523cd887b430132edac7"
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
    "url": "assets/js/app.68ed0bba.js",
    "revision": "a316c6bc91ca72e836696bdcc482b3ea"
  },
  {
    "url": "basicoperations.html",
    "revision": "f81257bab7d14a2f4f3f2320cff6920a"
  },
  {
    "url": "categories/index.html",
    "revision": "fb658d6ed6a30a4a24fca922593d32d6"
  },
  {
    "url": "compile.html",
    "revision": "12bcb01c72c900ee679437386a0fa085"
  },
  {
    "url": "dlpack.html",
    "revision": "cd8c1437bb3fd867d5c5f26e82b74177"
  },
  {
    "url": "faq.html",
    "revision": "43e9f127dcd9703315d8cfc46e24e2b1"
  },
  {
    "url": "index.html",
    "revision": "d5ef7eced5884e347feb033f2c047589"
  },
  {
    "url": "install.html",
    "revision": "132b9ccb256f3527f690792bbe1aa14e"
  },
  {
    "url": "judgeswitch.html",
    "revision": "618c50d3e134ac963e47cb59c99a17a5"
  },
  {
    "url": "keyconfig.html",
    "revision": "b862571a8958d4208727917914b70950"
  },
  {
    "url": "midgrade.html",
    "revision": "9e39a230fe3b1cba87296240416a0618"
  },
  {
    "url": "multiplay.html",
    "revision": "13e1c9f81810b2249c1125a94534827a"
  },
  {
    "url": "noteskin.html",
    "revision": "bf73758be0590e57c56b814609d9d69b"
  },
  {
    "url": "ratechange.html",
    "revision": "1d34f8eeaad55e47d01962d526e07264"
  },
  {
    "url": "reglog.html",
    "revision": "b2ba6ee0f0b8acfad17dc723cd136770"
  },
  {
    "url": "settings.html",
    "revision": "e5d31c875fd63e17da7816efe0dbf896"
  },
  {
    "url": "ssrnorm.html",
    "revision": "d08d7b4d6de84e4b95b918b393ddca77"
  },
  {
    "url": "tag/index.html",
    "revision": "0c4d091e1fdf40891d439c687b5ec6c2"
  },
  {
    "url": "theme.html",
    "revision": "ecc67a8e55068eabb8dfde118b5e4141"
  },
  {
    "url": "timeline/index.html",
    "revision": "561ce8d1c6b64c9bfddc1672ac8b7c73"
  },
  {
    "url": "zh-hant/index.html",
    "revision": "5cbfc9bd8766f1e9b67b85609ab5e954"
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
    "url": "zhs/random.png",
    "revision": "eed72d47f3d73a0f9282a7f6920b83c2"
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
