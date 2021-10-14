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
    "revision": "923a7d26ec5e73ac3239b86ac8f95c83"
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
    "url": "assets/js/19.ccab8b97.js",
    "revision": "4cf8dcdb2fb6449d0f30cfeff9bbfb33"
  },
  {
    "url": "assets/js/2.bd273a66.js",
    "revision": "ee02cdfa3b7b110e7d9449af3818932a"
  },
  {
    "url": "assets/js/20.c29c0768.js",
    "revision": "6fae91d0483dd31956c6a9247bbd9402"
  },
  {
    "url": "assets/js/21.3b991d35.js",
    "revision": "a55c189c05c6743c1fddf41bfa678501"
  },
  {
    "url": "assets/js/22.66b31f8e.js",
    "revision": "650da5ff4a6112ee25f53fe259827b2d"
  },
  {
    "url": "assets/js/23.47ed9718.js",
    "revision": "7b3af62fa52e65786787fa1382fac13d"
  },
  {
    "url": "assets/js/24.051cfd12.js",
    "revision": "ed0d871621482afb4581ad7bab68bee6"
  },
  {
    "url": "assets/js/25.89bdf951.js",
    "revision": "57935ea8009a6e8f16acc8c8fd88acf7"
  },
  {
    "url": "assets/js/3.fed7e92f.js",
    "revision": "36fc9d2b41d9f005c92237998912a428"
  },
  {
    "url": "assets/js/4.729b2e2f.js",
    "revision": "d4e3cf113f15307b542a891c1cf7d933"
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
    "url": "assets/js/app.d93baf49.js",
    "revision": "a7b070445805f4ecb07bd1e270160fd4"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "0a7be7e44c55ca74575b15ef311752e0"
  },
  {
    "url": "home.html",
    "revision": "67459026c67333006573090d6cfecfa1"
  },
  {
    "url": "index.html",
    "revision": "d64a700816b1a4e467a51b4051b8bb06"
  },
  {
    "url": "selfExamin/index.html",
    "revision": "953065a89c2388d760d66682f09b59fd"
  },
  {
    "url": "selfExamin/infomationRules.html",
    "revision": "040928eb9774e0792426be1427ba727e"
  },
  {
    "url": "selfExamin/informationCon.html",
    "revision": "87656718fc1a79164a0e20374f914b59"
  },
  {
    "url": "selfExamin/resourceCon.html",
    "revision": "420be34db0ff87b92dfe9c7b46635f62"
  },
  {
    "url": "web/css/index.html",
    "revision": "a6045e0d410646e87c0216aad012b1d3"
  },
  {
    "url": "web/html/index.html",
    "revision": "eb1b9e0ae95552d0f708e3e2c2ea5914"
  },
  {
    "url": "web/index.html",
    "revision": "c63b8b47734e0fb6004742b80090a171"
  },
  {
    "url": "web/js/index.html",
    "revision": "958deb0caa7d83f4891556bd7d2e9b59"
  },
  {
    "url": "web/js/jq.html",
    "revision": "4ec444f17b7d808e1086b7506271ece2"
  },
  {
    "url": "web/js/middle.html",
    "revision": "576be1da2542da85419933be943d6c78"
  },
  {
    "url": "web/performance/net.html",
    "revision": "020d70c288a44b32d995a11c5240d6b8"
  },
  {
    "url": "web/principle/index.html",
    "revision": "3a4f62d3b9adc98939d065a910c5f96e"
  },
  {
    "url": "web/vue/core.html",
    "revision": "70d2b6729ebf16ce716680d4cfb95a2d"
  },
  {
    "url": "web/vue/vueCode.html",
    "revision": "6de12821739e00082e6034e63b8a385e"
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
