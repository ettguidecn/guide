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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "671d238b09670c9390d50c308416e2b1"
  },
  {
    "url": "assets/css/0.styles.8dd35676.css",
    "revision": "760407af8d48279fb86b6ccef8f7b70b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.445af089.js",
    "revision": "d906909ced1751497ce60c2ca0b22a65"
  },
  {
    "url": "assets/js/11.1f93a84c.js",
    "revision": "932d07ed3561470b8738fc0468d1a17a"
  },
  {
    "url": "assets/js/12.a604f518.js",
    "revision": "7a25d8346965ccf73bc306d00bb7dee6"
  },
  {
    "url": "assets/js/13.e68111ea.js",
    "revision": "5414f516fc23761cb30c6a4ec8c03780"
  },
  {
    "url": "assets/js/14.f4736a32.js",
    "revision": "cf3cfa18120d85e9abdaf31b482c4c20"
  },
  {
    "url": "assets/js/15.da3f11e2.js",
    "revision": "fb0b6e6e5751bed8c5cb8f48d3d55da5"
  },
  {
    "url": "assets/js/16.134840b3.js",
    "revision": "a396e7bcb0ffa5a99aae965059fc2926"
  },
  {
    "url": "assets/js/17.f1c3ddd1.js",
    "revision": "02b2a8210d4e97745460b507f487886f"
  },
  {
    "url": "assets/js/2.a4cf675e.js",
    "revision": "1c6b048b81dfea0ce9854bdbb68e1bc2"
  },
  {
    "url": "assets/js/3.b6c5c75c.js",
    "revision": "8e9a0df722aa1d357c9cf6dc83736c7d"
  },
  {
    "url": "assets/js/4.4c214c78.js",
    "revision": "0b4845cde5d4d5a94c379837f92e3fa7"
  },
  {
    "url": "assets/js/5.a024f647.js",
    "revision": "880393f8d1ce80bee5e13c5ef203fab9"
  },
  {
    "url": "assets/js/6.42b26de0.js",
    "revision": "f7a54eb1fa5e0e58e67d49839738d5b7"
  },
  {
    "url": "assets/js/7.bd167c11.js",
    "revision": "542c358a97bb3313576dff9c99dc6937"
  },
  {
    "url": "assets/js/8.371214de.js",
    "revision": "c314a8a9c7ce71154e6643fe9443dd59"
  },
  {
    "url": "assets/js/9.6f5da657.js",
    "revision": "d12d0e8ae6ae44c79ee9e9a8b737df28"
  },
  {
    "url": "assets/js/app.4e505341.js",
    "revision": "18891fbb4cc661e7c58d48f3b7c06f61"
  },
  {
    "url": "basicoperations.html",
    "revision": "46e6f00e75a436f2ac847e8026c6ca2a"
  },
  {
    "url": "dlpack.html",
    "revision": "0eace17f0e2757f9bf4b64f937192da5"
  },
  {
    "url": "index.html",
    "revision": "bc37a1e698d34999c1cc152819b6ed31"
  },
  {
    "url": "install.html",
    "revision": "420d1b8f91c30678d2338440d0baafd6"
  },
  {
    "url": "judgeswitch.html",
    "revision": "b45103cb906c37c4f048f98d3e7101cb"
  },
  {
    "url": "keyconfig.html",
    "revision": "d665a1ef75b4060328a93a099a957c72"
  },
  {
    "url": "multiplay.html",
    "revision": "20ad480af14dc322cca44850999c609f"
  },
  {
    "url": "noteskin.html",
    "revision": "b832d6f52f1f53d600b32faa1941ce67"
  },
  {
    "url": "ratechange.html",
    "revision": "8a69f257de411345c4132dad1532507d"
  },
  {
    "url": "reglog.html",
    "revision": "9009cc6b7821b59176bb0cf241eebc4d"
  },
  {
    "url": "settings.html",
    "revision": "4f6d41a1643718b13506cbd3e21fdef4"
  },
  {
    "url": "theme.html",
    "revision": "fb66fc2a0128d6a3d8c5fa672d6f3de5"
  },
  {
    "url": "zh-hant/index.html",
    "revision": "a916377de437035869b44791571041b5"
  },
  {
    "url": "zh-hant/test.html",
    "revision": "8e5a7aa96cbf2dba78f4b43335ca9a63"
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
    "url": "zhs/connect.png",
    "revision": "23e54b0a1414307786f5a990f43641ba"
  },
  {
    "url": "zhs/log1.png",
    "revision": "74ff32dcc72592c2e2288b547bc5b04a"
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
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
