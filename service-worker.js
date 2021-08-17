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
    "revision": "0d64d4b0729686c11d48fc01a6a5daaa"
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
    "url": "assets/js/13.096900da.js",
    "revision": "b53ddff64a888ff0612eae59fe006f8d"
  },
  {
    "url": "assets/js/14.b4a10b58.js",
    "revision": "d95dd1166d4565ceca3dce4fdcc37737"
  },
  {
    "url": "assets/js/15.a4a7d7e1.js",
    "revision": "d9f79c109ef9a183068300fa962df210"
  },
  {
    "url": "assets/js/16.e49d2280.js",
    "revision": "c949e9502415a72d16cedf1c5d9e3421"
  },
  {
    "url": "assets/js/17.3701dc86.js",
    "revision": "c4b5eaf465ff82f84a10df2dd7042555"
  },
  {
    "url": "assets/js/18.e95df05e.js",
    "revision": "a683257e53daa55d8c91f54a6b797b81"
  },
  {
    "url": "assets/js/19.80f37737.js",
    "revision": "c4fc87a63c541b86ab77a3b08d81409c"
  },
  {
    "url": "assets/js/2.8a356b46.js",
    "revision": "aedc6d4be19f4bc1bba4ff26dcdaa3d0"
  },
  {
    "url": "assets/js/3.8abf82f5.js",
    "revision": "42d06aae7380fdbd1a420a14e1f6f06e"
  },
  {
    "url": "assets/js/4.fab61d3e.js",
    "revision": "14251495c055438e29c41a4d66973d64"
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
    "url": "assets/js/app.b5b105e3.js",
    "revision": "e04461423599894911b23a9702fac035"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "4e88bdb26c4cef846ae6530dafb69ca0"
  },
  {
    "url": "home.html",
    "revision": "0e3816d6c00359f013db8502420cc3e9"
  },
  {
    "url": "index.html",
    "revision": "34fba8c6a7e9c4017ab18a1cf52afe59"
  },
  {
    "url": "web/css/index.html",
    "revision": "3367006c2efef2df496b4e1ef3b7ac8b"
  },
  {
    "url": "web/html/index.html",
    "revision": "299d1e07ec947854fd44e2367f31a76e"
  },
  {
    "url": "web/index.html",
    "revision": "d0e7995e0164da0f1ea5233a0f11905b"
  },
  {
    "url": "web/js/index.html",
    "revision": "3b76a892bae978e7d039ed99a90ba916"
  },
  {
    "url": "web/js/js-middle.html",
    "revision": "7fa389cd9efacf962ee341ef429a32ba"
  },
  {
    "url": "web/principle/index.html",
    "revision": "29f70b0716ee12a8797f33c4b3ceaa7f"
  },
  {
    "url": "web/vue/core.html",
    "revision": "39dce65600d84ad27f83f9018509a33b"
  },
  {
    "url": "web/vue/vueCode.html",
    "revision": "b8710a6b99e3c37f7547bda6d4beb3d2"
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
