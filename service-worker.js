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
    "revision": "1c7d557205bccbd293927f1821942c96"
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
    "url": "assets/js/13.b6a3167b.js",
    "revision": "b53ddff64a888ff0612eae59fe006f8d"
  },
  {
    "url": "assets/js/14.b95df60b.js",
    "revision": "5da42e3791504ef3def1c32dc9468973"
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
    "url": "assets/js/app.f212654e.js",
    "revision": "c2241ab467411802a54eabcddf533498"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "84b71d8e3890aebb8fa898b1c37e398e"
  },
  {
    "url": "home.html",
    "revision": "4318c8878f0b61969e89c29eabd74f2b"
  },
  {
    "url": "index.html",
    "revision": "ee80044a4b6f58b9b75236a43653ce7a"
  },
  {
    "url": "web/css/index.html",
    "revision": "17fa1c9a0d75d086941a4e2782452021"
  },
  {
    "url": "web/html/index.html",
    "revision": "72c278f9105bcf8313cb3f7a6c0b0a1c"
  },
  {
    "url": "web/index.html",
    "revision": "f889ffd1972bb8b96c91fc84d1757197"
  },
  {
    "url": "web/js/index.html",
    "revision": "cb3f7ada4876bebae091039764de02d9"
  },
  {
    "url": "web/js/middle.html",
    "revision": "78a9f295a3e15b6ae519ceabb9f8dfa6"
  },
  {
    "url": "web/performance/net.html",
    "revision": "7faa11c856c8825b4a61da728e5204bd"
  },
  {
    "url": "web/principle/index.html",
    "revision": "59320744363c8da151d8ea39cf70ec5f"
  },
  {
    "url": "web/vue/core.html",
    "revision": "db8d818ae6564b1296e06548be1497c6"
  },
  {
    "url": "web/vue/vueCode.html",
    "revision": "6878632c71d6cb392982d4e1de071987"
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
