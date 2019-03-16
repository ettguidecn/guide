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
    "revision": "7e20a61ad35a10e7b60675ad334d306f"
  },
  {
    "url": "assets/css/0.styles.8dd35676.css",
    "revision": "ca1056087730cf4e5a1b08d1f8751d11"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c2b484c1.js",
    "revision": "80592e58a9d6255a26d11ab571167bb6"
  },
  {
    "url": "assets/js/11.52aa6fe8.js",
    "revision": "932d07ed3561470b8738fc0468d1a17a"
  },
  {
    "url": "assets/js/12.4415842e.js",
    "revision": "b7b23de9fa61e16ac9838e944ee3f497"
  },
  {
    "url": "assets/js/13.b3b4c0a1.js",
    "revision": "efb9ee5debf82c675955bb6d87201dbc"
  },
  {
    "url": "assets/js/14.c7a0a6fa.js",
    "revision": "aa2ef08e569e2e37acd51753497f9029"
  },
  {
    "url": "assets/js/15.b9c96c11.js",
    "revision": "8b3485b9d75ad893c80fd93aa350f750"
  },
  {
    "url": "assets/js/16.e866c749.js",
    "revision": "218d45f3d2a09e17afba649255638758"
  },
  {
    "url": "assets/js/17.f1c3ddd1.js",
    "revision": "02b2a8210d4e97745460b507f487886f"
  },
  {
    "url": "assets/js/2.fbeadc39.js",
    "revision": "b29470ef580202dd64eb870c85563cb3"
  },
  {
    "url": "assets/js/3.4af439b7.js",
    "revision": "3d6eda96a47e441d68ca3e9b693932bd"
  },
  {
    "url": "assets/js/4.7b010a94.js",
    "revision": "0b4845cde5d4d5a94c379837f92e3fa7"
  },
  {
    "url": "assets/js/5.5524f68b.js",
    "revision": "46811444d121d1a0c7954a56f0c674c2"
  },
  {
    "url": "assets/js/6.c4185c24.js",
    "revision": "ed15a47600896f82b90414db1fa2c5ae"
  },
  {
    "url": "assets/js/7.4c4fdb70.js",
    "revision": "8472730a866eb19570d6fd5359c32f52"
  },
  {
    "url": "assets/js/8.78ea20d4.js",
    "revision": "e20e23dc8d04696635c26b2c6b078be7"
  },
  {
    "url": "assets/js/9.a7b77c79.js",
    "revision": "51fd8bad983032f8012916782a95bd88"
  },
  {
    "url": "assets/js/app.e706ce4a.js",
    "revision": "8e3f0300f348d4098dab02dbb9b51753"
  },
  {
    "url": "basicoperations.html",
    "revision": "159ba548181f4f05a7f004a21e63538e"
  },
  {
    "url": "dlpack.html",
    "revision": "f94b679ef0c4920408adda97dfd162a8"
  },
  {
    "url": "index.html",
    "revision": "5199f8248f143258742e33050e00c45c"
  },
  {
    "url": "install.html",
    "revision": "5b27b553f748b50566ca58a1a0ed6818"
  },
  {
    "url": "judgeswitch.html",
    "revision": "9a57f73b1c61affaf2ee2951e067f413"
  },
  {
    "url": "keyconfig.html",
    "revision": "9f0deef1f156ab0e63d849bf4ed8428c"
  },
  {
    "url": "multiplay.html",
    "revision": "8099f42ca1bf51bd1793e56238f71536"
  },
  {
    "url": "noteskin.html",
    "revision": "4b400076e82364ffffb510f46fe97e7e"
  },
  {
    "url": "ratechange.html",
    "revision": "c9be035cc82ff3eb7ef2aa7192c26392"
  },
  {
    "url": "reglog.html",
    "revision": "daa842d42eb96af95644415692105bd9"
  },
  {
    "url": "settings.html",
    "revision": "ef345f12789f5562ca7a4a94cd17f90e"
  },
  {
    "url": "theme.html",
    "revision": "68ee1035c317ff29df20926b2c13c3f9"
  },
  {
    "url": "zh-hant/index.html",
    "revision": "33a9bf5de32a1bc515ab1207a8ebb4ee"
  },
  {
    "url": "zh-hant/test.html",
    "revision": "14e2cd0283f35556e0d8bcf8484b1bf5"
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
