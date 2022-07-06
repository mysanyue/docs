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
    "revision": "520ddd1d88768073751395462783bd44"
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
    "url": "assets/js/11.97bf68ba.js",
    "revision": "89b5e8c520a9da7b65b3d3e25d2f3aff"
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
    "url": "assets/js/15.6bb1897c.js",
    "revision": "fb0129b50d7ad901fb6df44404cda3bf"
  },
  {
    "url": "assets/js/16.132b7cb6.js",
    "revision": "236ee5177ccee0a7179397b5eee3b699"
  },
  {
    "url": "assets/js/17.6b3733c6.js",
    "revision": "a3cb525f876a978e303b253efc77104d"
  },
  {
    "url": "assets/js/18.99ccfb75.js",
    "revision": "3bab82fb35c59d5a457eea5f238d023a"
  },
  {
    "url": "assets/js/19.d1ea63d9.js",
    "revision": "39058856f5a58d09d41976598f6a8410"
  },
  {
    "url": "assets/js/2.bd273a66.js",
    "revision": "ee02cdfa3b7b110e7d9449af3818932a"
  },
  {
    "url": "assets/js/20.f1f6beef.js",
    "revision": "cf9e1e65175fb1ccc8ace51b63fddee7"
  },
  {
    "url": "assets/js/21.ed11ede3.js",
    "revision": "7036dca351703f56c0ccc9300ce28f83"
  },
  {
    "url": "assets/js/22.5e267b61.js",
    "revision": "1d28d8d1b1c5cfa2795cfe9229b2fe28"
  },
  {
    "url": "assets/js/23.a0273175.js",
    "revision": "ca08f1bde8f75877754b4446d36aeeb3"
  },
  {
    "url": "assets/js/24.ed9227bb.js",
    "revision": "df2305a9e3f87a286225310f63cc18c0"
  },
  {
    "url": "assets/js/25.9176984d.js",
    "revision": "d130e7ed089a6e01e1a30e7ea9b0a127"
  },
  {
    "url": "assets/js/26.2d2cb6f6.js",
    "revision": "ff32a520c77467026ed964191c188729"
  },
  {
    "url": "assets/js/27.30e711c5.js",
    "revision": "3fcfc19c63b5dd7f6a1ce9344ffbedee"
  },
  {
    "url": "assets/js/28.9dce2d3a.js",
    "revision": "1629a6abf224ef941732f6473569ce6a"
  },
  {
    "url": "assets/js/29.e4b77de4.js",
    "revision": "a4686e7261f9cc81f840f79d6873ddb2"
  },
  {
    "url": "assets/js/3.3659927b.js",
    "revision": "5ae2914bedb482a4eeaa56d2b4cf1e43"
  },
  {
    "url": "assets/js/30.1773930d.js",
    "revision": "85d4ebd485aeeaa0e9037bda8a4c0c9b"
  },
  {
    "url": "assets/js/31.6756403e.js",
    "revision": "8c745884ed431fa8b9f98aa6cb47bc52"
  },
  {
    "url": "assets/js/32.a2f3cf3e.js",
    "revision": "ccfe311a4217327830dae741d318386f"
  },
  {
    "url": "assets/js/33.a039fbe7.js",
    "revision": "c59938d18293448d1f92c5734db95ac8"
  },
  {
    "url": "assets/js/34.e04618a9.js",
    "revision": "9cc3e0a39197d88a6a4f739dc5f51c7e"
  },
  {
    "url": "assets/js/4.706a3b7e.js",
    "revision": "bd43337fc4fea1982d616247980ef875"
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
    "url": "assets/js/app.6a7c6212.js",
    "revision": "1af5d2885326f6aba39efd75238b4a8c"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "62f6f3a54682f945d2a960afea192847"
  },
  {
    "url": "home.html",
    "revision": "78c6ce8e7b65509aa02131585fb2a896"
  },
  {
    "url": "index.html",
    "revision": "4bb3cd248c86e7a1d1ca0378e9090083"
  },
  {
    "url": "selfExamin/index.html",
    "revision": "ed28dde3a7abdc0b6aae6919998c6fb9"
  },
  {
    "url": "selfExamin/infomationRules.html",
    "revision": "567fead8a195fbd2097fa588eecf0569"
  },
  {
    "url": "selfExamin/informationCon.html",
    "revision": "aac35471e1aa6964233c464b585b8a54"
  },
  {
    "url": "selfExamin/resourceCon.html",
    "revision": "5db1c3c5ae51eb94d235686b50462c28"
  },
  {
    "url": "web/css/base.html",
    "revision": "022af0260cc398f5183a0dba9365cb55"
  },
  {
    "url": "web/css/index.html",
    "revision": "4ca310b18395eab86a1744cc30277fca"
  },
  {
    "url": "web/html/index.html",
    "revision": "5bd38d900bf00aa6a244aee1fca6049b"
  },
  {
    "url": "web/index.html",
    "revision": "52a987c66de178543c4b02a3e374b488"
  },
  {
    "url": "web/js/base.html",
    "revision": "9760bff99d6891d1ddf9357cc0b9887e"
  },
  {
    "url": "web/js/index.html",
    "revision": "aaba014c7c7cb6a3a38798cba3dc4152"
  },
  {
    "url": "web/js/jq.html",
    "revision": "6fab61e0bf4d035d9baaaf335a333423"
  },
  {
    "url": "web/js/middle.html",
    "revision": "52959e44b18d93b13bdcdc2658a706c4"
  },
  {
    "url": "web/js/ms1.html",
    "revision": "e7f06af610ae1f1e649fe93e44e98837"
  },
  {
    "url": "web/js/ms2.html",
    "revision": "3f403a736264277c4bf77ae6f332ee96"
  },
  {
    "url": "web/js/ms20211229.html",
    "revision": "b90624ba3a813125c010321095fd17c0"
  },
  {
    "url": "web/js/ms20211230.html",
    "revision": "c677ff3ca6fdc80bf8ca49aa72d95b89"
  },
  {
    "url": "web/js/node.html",
    "revision": "01c3bbe3ff439588ece1d9dc774a7ec5"
  },
  {
    "url": "web/performance/base.html",
    "revision": "1a9a4039d72e23f7ae2e13430b6897a8"
  },
  {
    "url": "web/performance/net.html",
    "revision": "abece5ed28339d3ead1319ab89583d86"
  },
  {
    "url": "web/principle/index.html",
    "revision": "1467492943cd5bf426ca0e8ba46816aa"
  },
  {
    "url": "web/suanf/base.html",
    "revision": "9132ee766a072f8231a6db01ebdc0734"
  },
  {
    "url": "web/vue/core.html",
    "revision": "50121e7b00f5bbd525b92729ff2ebeeb"
  },
  {
    "url": "web/vue/vueCode.html",
    "revision": "a9a090878161cbcfb83f6812190e23ac"
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
