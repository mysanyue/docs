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
    "revision": "729c9d54b50efda2169300b33b04931f"
  },
  {
    "url": "assets/403.png",
    "revision": "38df09acc84f7295ad65103622f225bb"
  },
  {
    "url": "assets/404.png",
    "revision": "a9f499179e30d2ce5f313573e84c6244"
  },
  {
    "url": "assets/500.png",
    "revision": "d81e8d388d0ef7b148c3fbe1ac64a6d3"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.72aee74f.js",
    "revision": "7766e0db93a428544a6047dcf9464edf"
  },
  {
    "url": "assets/js/11.a516632e.js",
    "revision": "48b7e8f300058a2f567125201559eaa5"
  },
  {
    "url": "assets/js/12.f0fe601d.js",
    "revision": "d05274344867349126ad96c8b17b1f2b"
  },
  {
    "url": "assets/js/13.5acb52d7.js",
    "revision": "610c0128f77a5dc60be9ef8c80e25f67"
  },
  {
    "url": "assets/js/14.799de07b.js",
    "revision": "bc93f6121f296fca0442f24757d1eeb2"
  },
  {
    "url": "assets/js/15.c9cf3e97.js",
    "revision": "aa8fa13c68039ecea2d1047c6310f604"
  },
  {
    "url": "assets/js/16.ed8d80ea.js",
    "revision": "c5107a1cdce9d05007b7e0393a2f941d"
  },
  {
    "url": "assets/js/17.1468303e.js",
    "revision": "a145e0882c03f697f2bd4d1458ba2bb2"
  },
  {
    "url": "assets/js/18.9cd494e2.js",
    "revision": "5af18274ed4970c13e98bbb4cec26b53"
  },
  {
    "url": "assets/js/19.8b419481.js",
    "revision": "9d42a4c6a6d781583f590d17cdbc360c"
  },
  {
    "url": "assets/js/2.8a356b46.js",
    "revision": "aedc6d4be19f4bc1bba4ff26dcdaa3d0"
  },
  {
    "url": "assets/js/20.70675887.js",
    "revision": "6d73ef9419a3c1337ff8a1f87d663501"
  },
  {
    "url": "assets/js/3.8abf82f5.js",
    "revision": "42d06aae7380fdbd1a420a14e1f6f06e"
  },
  {
    "url": "assets/js/4.8e895249.js",
    "revision": "aa7742c8dfd41806e4676d7cc6ad21b3"
  },
  {
    "url": "assets/js/5.a5643e96.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/6.9dc86913.js",
    "revision": "b2b3ee3cb26da4ad99ad3313ae0f4a1a"
  },
  {
    "url": "assets/js/7.1fa8c8f1.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/8.af1304ff.js",
    "revision": "2c1ee88d54a7811d2e1f0335cd84ab83"
  },
  {
    "url": "assets/js/9.2748cce6.js",
    "revision": "d025868ffde8fbd75db3df4815ef4acd"
  },
  {
    "url": "assets/js/app.7f263f30.js",
    "revision": "b0c4f6ded174126184c929b4498dc49f"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "f7101621d402555b0e5824fb6654f376"
  },
  {
    "url": "home.html",
    "revision": "6e8556c7175cea9353dffbd4ede0b1ac"
  },
  {
    "url": "index.html",
    "revision": "1cb185371ab87f2e2aa3d113c796b27b"
  },
  {
    "url": "web/css/index.html",
    "revision": "28cf348767cea7e120c074ef691a4dca"
  },
  {
    "url": "web/html/index.html",
    "revision": "b6836db2bbfea86774630ee8655035d9"
  },
  {
    "url": "web/index.html",
    "revision": "cc2553afeca13a73de14de4960ddaa5f"
  },
  {
    "url": "web/js/index.html",
    "revision": "a6e03e12bed9b020319bbc9b1fa252e9"
  },
  {
    "url": "web/js/middle.html",
    "revision": "6e30a898db989dfaf1a720717ccc69dc"
  },
  {
    "url": "web/performance/net.html",
    "revision": "b7a6d840f85ea2cd8841bea1934f7c1f"
  },
  {
    "url": "web/principle/index.html",
    "revision": "d911cce3b8aba7f8027eba06a69560b6"
  },
  {
    "url": "web/vue/core.html",
    "revision": "11fd63b8883f75c9b681bd8761021732"
  },
  {
    "url": "web/vue/vueCode.html",
    "revision": "d474cf1f2cd8b380a5e12099c104e73b"
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
