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
    "revision": "f4f48969db871932eb67faea63d42b07"
  },
  {
    "url": "assets/css/0.styles.2c52293c.css",
    "revision": "8cde49ff1398a5cc41a9c3dc0c828a50"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.940020cb.js",
    "revision": "314220ba2b320acd15df913f5127ea97"
  },
  {
    "url": "assets/js/10.4de2f37b.js",
    "revision": "2d5c75dfd1b2aedd1636f8120b3d0c30"
  },
  {
    "url": "assets/js/11.37e3a6f0.js",
    "revision": "2f8dbda455c08bced800a70fe7535b04"
  },
  {
    "url": "assets/js/12.33313321.js",
    "revision": "011c3747be21c3c1cb074c435349b0c4"
  },
  {
    "url": "assets/js/13.49fe6205.js",
    "revision": "8f9a949c4d15b8ce86b43b7efa7ded89"
  },
  {
    "url": "assets/js/14.ddd19df6.js",
    "revision": "d2eccf479290173bd760550dc9ce29a1"
  },
  {
    "url": "assets/js/15.2a6f3b3a.js",
    "revision": "610a9fd7868cad9a864f57f068d6588f"
  },
  {
    "url": "assets/js/16.b65fbd77.js",
    "revision": "2d8127b7336db1d302fa788e54ff3fe4"
  },
  {
    "url": "assets/js/17.c6adaea8.js",
    "revision": "e19530b2955d4be4ea53115ff060590d"
  },
  {
    "url": "assets/js/18.dcb1a3fd.js",
    "revision": "1b079b7e56f778a044758eedbbe8384c"
  },
  {
    "url": "assets/js/19.94ae0687.js",
    "revision": "680eb937d7cf02b95a01845725e41a8c"
  },
  {
    "url": "assets/js/20.0e3a0bde.js",
    "revision": "acae0870d43209ca7fb673743b6e6173"
  },
  {
    "url": "assets/js/21.7fab59e2.js",
    "revision": "57db2be72ca98d024799fe04f3435660"
  },
  {
    "url": "assets/js/22.8bd2f0a1.js",
    "revision": "2cc1ac9322ad2b332ce7c534dd41104f"
  },
  {
    "url": "assets/js/23.59d7c7c7.js",
    "revision": "9635695898c1f715dd1177fa9ab3c0d1"
  },
  {
    "url": "assets/js/24.7459df78.js",
    "revision": "74ad0ea3b91335d7ed30cdfdda291cd3"
  },
  {
    "url": "assets/js/3.cb7a3ef6.js",
    "revision": "c8661f73af02b28403141a9454181580"
  },
  {
    "url": "assets/js/4.c9147c85.js",
    "revision": "0eb06ef90be97a0c7d2dc89ebe466c83"
  },
  {
    "url": "assets/js/5.a1022828.js",
    "revision": "f5af83fb1daf50741d5c9524f6d3e5d8"
  },
  {
    "url": "assets/js/6.735dddd6.js",
    "revision": "9b234043bc51ca9b011f55560a2083e4"
  },
  {
    "url": "assets/js/7.d04e3f52.js",
    "revision": "032f86ab26e352f4ddfbdbaa9c9adf36"
  },
  {
    "url": "assets/js/8.2a7295ac.js",
    "revision": "08ee396589b6d7234ed2c73c5db6cf63"
  },
  {
    "url": "assets/js/9.dabed8db.js",
    "revision": "e2972323165b0694461049f874108a45"
  },
  {
    "url": "assets/js/app.e93a4b6e.js",
    "revision": "7feac9fdac1c97e20f6e8562eb1399ff"
  },
  {
    "url": "basicoperations.html",
    "revision": "ea13ac1a9bd97a7f9b202018e94ebb8b"
  },
  {
    "url": "categories/index.html",
    "revision": "3deec6391735df46c197d423e06a3009"
  },
  {
    "url": "dlpack.html",
    "revision": "7223c06bdd3811f9e3581a9d67e374aa"
  },
  {
    "url": "index.html",
    "revision": "847db0e4a0f64a3a2cfee501d3c8f092"
  },
  {
    "url": "install.html",
    "revision": "d39908d560cba7680f024fcc1a2b7d13"
  },
  {
    "url": "judgeswitch.html",
    "revision": "51a25ec4aa5f2e3af3efa01ee09f2b47"
  },
  {
    "url": "keyconfig.html",
    "revision": "dd573f057ac22b72be0242773f2bff10"
  },
  {
    "url": "multiplay.html",
    "revision": "69ab06d16a24769890ae1c80610436f9"
  },
  {
    "url": "noteskin.html",
    "revision": "231a2bf93309d43bc2f29f35f75e1fdf"
  },
  {
    "url": "ratechange.html",
    "revision": "2dda17460239524034a3e5ee2eae1113"
  },
  {
    "url": "reglog.html",
    "revision": "0365e5c7e6ff9811f123c39747918acd"
  },
  {
    "url": "settings.html",
    "revision": "b2943e4076246df733b2d84bcec06345"
  },
  {
    "url": "tag/index.html",
    "revision": "7d9fa401928a96083143ef5a6cc892bd"
  },
  {
    "url": "theme.html",
    "revision": "501bcfd05cf6b5ba5bc7470b01e30232"
  },
  {
    "url": "timeline/index.html",
    "revision": "ccdbdf06170a594eec5568283285ae3d"
  },
  {
    "url": "zh-hant/index.html",
    "revision": "084048146a01e24c21b576b6bc27b56f"
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
