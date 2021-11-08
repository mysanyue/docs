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
    "revision": "883f10578f99994d1860738086b14f16"
  },
  {
    "url": "assets/css/0.styles.7841ddca.css",
    "revision": "57cb11beb1cc6047b577c4a793643d86"
  },
  {
    "url": "assets/images/box.png",
    "revision": "16ab12186cf69a06ebd4a8c7410320dc"
  },
  {
    "url": "assets/images/js/scope.png",
    "revision": "c24a64550bdb61bcf15377055a7c61b0"
  },
  {
    "url": "assets/img/2018-4-1.d3a2380b.png",
    "revision": "d3a2380b4fd95525480f5964f8b968c7"
  },
  {
    "url": "assets/img/2018-4-2.0497d70a.png",
    "revision": "0497d70ae079bc022d16cebc80523572"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6d4cafc1.js",
    "revision": "46468c2ab29b1fcc915de73736ee093f"
  },
  {
    "url": "assets/js/11.64b6e0c7.js",
    "revision": "040634e1352a483285cdb2415ea561b6"
  },
  {
    "url": "assets/js/12.f2b0f05a.js",
    "revision": "59aa04bdcd95b774a3c1c1e2ef4a3de6"
  },
  {
    "url": "assets/js/13.be5a5bde.js",
    "revision": "8900a598da882d74a7b33d6549ec26cb"
  },
  {
    "url": "assets/js/14.81dccba1.js",
    "revision": "770196447ba3deaf4f8d2214fe980014"
  },
  {
    "url": "assets/js/15.d0b068d4.js",
    "revision": "761f3a349364d51ee55b9cf556c24aba"
  },
  {
    "url": "assets/js/16.0297d03b.js",
    "revision": "3c68fdb094b1386494a3c4af64c09fc2"
  },
  {
    "url": "assets/js/17.a4054c76.js",
    "revision": "96450b66a85acfec2166c0cb6d480555"
  },
  {
    "url": "assets/js/18.5e2d6700.js",
    "revision": "dfb0513e040f22ae2d0100b5cee45784"
  },
  {
    "url": "assets/js/19.cdc473c6.js",
    "revision": "b648457eebe87f656da4da2f54cd6208"
  },
  {
    "url": "assets/js/2.bd273a66.js",
    "revision": "ee02cdfa3b7b110e7d9449af3818932a"
  },
  {
    "url": "assets/js/20.07e13137.js",
    "revision": "ea703a9a9098b1832e23a4b702dc2872"
  },
  {
    "url": "assets/js/21.d94a9bb3.js",
    "revision": "a6432ed2664b861cf5d2dabe1b990c26"
  },
  {
    "url": "assets/js/22.fe470767.js",
    "revision": "60cb6a04b9f15e6768b4642ce517bdd8"
  },
  {
    "url": "assets/js/23.dc0905c5.js",
    "revision": "b8e3ec99186c5e55a10199710c029bc7"
  },
  {
    "url": "assets/js/24.45da18e2.js",
    "revision": "bf6b4a4544684008614b587a1692929b"
  },
  {
    "url": "assets/js/25.5103d3fb.js",
    "revision": "7fbb33e2dfbb3d03900b06bdc279d187"
  },
  {
    "url": "assets/js/26.93612d17.js",
    "revision": "3c04d055533c6f7ec9f534d71ed558db"
  },
  {
    "url": "assets/js/3.fed7e92f.js",
    "revision": "36fc9d2b41d9f005c92237998912a428"
  },
  {
    "url": "assets/js/4.3244d998.js",
    "revision": "4ed964fce1b5bc5a40921b446735504d"
  },
  {
    "url": "assets/js/5.44ef7197.js",
    "revision": "43b17c7c4f50a8a1879bc2d344f61426"
  },
  {
    "url": "assets/js/6.a9c2280f.js",
    "revision": "36176d9aad5426dcc82e46b6e401138f"
  },
  {
    "url": "assets/js/7.dc58cd00.js",
    "revision": "ae1c7790397cbc0a137ada55d23e42be"
  },
  {
    "url": "assets/js/8.445740d2.js",
    "revision": "b1aad2ce3967d8c978cbee7a4bf13cae"
  },
  {
    "url": "assets/js/9.fc72d29f.js",
    "revision": "103eec09c1454d86e5096a2ee340dd27"
  },
  {
    "url": "assets/js/app.d59521b9.js",
    "revision": "5f5faeb589763c7ed57763aa16eeb824"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "48b76ecccd3ed2f8bfe56617d05b9f8b"
  },
  {
    "url": "home.html",
    "revision": "78b9b0c40c1663968245402545cf2d1d"
  },
  {
    "url": "index.html",
    "revision": "f1718c3da9010c28c2904f221f29955d"
  },
  {
    "url": "selfExamin/index.html",
    "revision": "bb7f968c84935b17be1b3813fef58190"
  },
  {
    "url": "selfExamin/infomationRules.html",
    "revision": "fcd84a4b6ec824951e9a0eab6fd3e993"
  },
  {
    "url": "selfExamin/informationCon.html",
    "revision": "0cd4d787e8fea80da5f178bcf72d5ed0"
  },
  {
    "url": "selfExamin/resourceCon.html",
    "revision": "e91ad4447b20b156b17eb90ed133f318"
  },
  {
    "url": "web/css/index.html",
    "revision": "0f7a01801495082169f912b34ed6ffb2"
  },
  {
    "url": "web/html/index.html",
    "revision": "d6247f38df493a07fb0066ec28798029"
  },
  {
    "url": "web/index.html",
    "revision": "b634278ef99a49edac5cfa7286cd75c9"
  },
  {
    "url": "web/js/index.html",
    "revision": "1f02fa85e5fa8a9cf8d09dcdd5b5d75e"
  },
  {
    "url": "web/js/jq.html",
    "revision": "e44805e00b4202e4c25451d917a15f48"
  },
  {
    "url": "web/js/middle.html",
    "revision": "f4d20a35267a71c2504429271d4e1c00"
  },
  {
    "url": "web/js/ms1.html",
    "revision": "5bb5e8b708cf3d726c4e78f786830aa8"
  },
  {
    "url": "web/performance/net.html",
    "revision": "564592e5eaaac5b0ed9540d1399bad56"
  },
  {
    "url": "web/principle/index.html",
    "revision": "60c1a30a1f9ea870b52f9f69f594052d"
  },
  {
    "url": "web/vue/core.html",
    "revision": "229a887db4fc70429a579d50f99b849c"
  },
  {
    "url": "web/vue/vueCode.html",
    "revision": "6b372672016581d16b319d6c486e6451"
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
