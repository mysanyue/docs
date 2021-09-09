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
    "revision": "9bce372064a987128a3f22f02b939fe8"
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
    "url": "assets/js/10.a68df1e4.js",
    "revision": "d43b2e5f3ce105fd4e213d6c205cb5f6"
  },
  {
    "url": "assets/js/11.95fdf88f.js",
    "revision": "32b093bf73846d2c74528c1da7235333"
  },
  {
    "url": "assets/js/12.4ebb4b95.js",
    "revision": "80c814389e4bec1368b181421774e04f"
  },
  {
    "url": "assets/js/13.80c537e4.js",
    "revision": "9273b31b89e5b2b9eacfa420f7e750b6"
  },
  {
    "url": "assets/js/14.9a1989a8.js",
    "revision": "9dae2aff7a606b000a8cdc7d317b5ecc"
  },
  {
    "url": "assets/js/15.2fd5c842.js",
    "revision": "5924b0e157f3185f111343a90ec7e958"
  },
  {
    "url": "assets/js/16.6db83e39.js",
    "revision": "90fc6aa855693d70fada72723aa7bda0"
  },
  {
    "url": "assets/js/17.dfef5b92.js",
    "revision": "ec2ed50115895156a644818a47e0bd90"
  },
  {
    "url": "assets/js/18.d3309bcf.js",
    "revision": "a5d5f06ea155b83106158139fc737c81"
  },
  {
    "url": "assets/js/19.82e6e4d0.js",
    "revision": "d9cfda2e90698e38edde06026672aa64"
  },
  {
    "url": "assets/js/2.8a356b46.js",
    "revision": "aedc6d4be19f4bc1bba4ff26dcdaa3d0"
  },
  {
    "url": "assets/js/20.d007b6d7.js",
    "revision": "3b3fd835d22f6c70d5d705949a00c0d8"
  },
  {
    "url": "assets/js/21.42af7d60.js",
    "revision": "79446686810486e5a919695a14a8c6c3"
  },
  {
    "url": "assets/js/3.8abf82f5.js",
    "revision": "42d06aae7380fdbd1a420a14e1f6f06e"
  },
  {
    "url": "assets/js/4.47d395df.js",
    "revision": "6057c18af69f20ad30fb8bda904fdc1a"
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
    "url": "assets/js/9.aca8435a.js",
    "revision": "86daa9e6f54f2d0c78812e4e67fcb8c4"
  },
  {
    "url": "assets/js/app.0f146c07.js",
    "revision": "360f0d21cc50ae5dea2e3f66035bc483"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "5a54b0d3e7801ff03be7e218009879d5"
  },
  {
    "url": "home.html",
    "revision": "8f00a535351386b170b474c1cac26320"
  },
  {
    "url": "index.html",
    "revision": "07adf402ea2c54119f16b0850073c4a0"
  },
  {
    "url": "web/css/index.html",
    "revision": "5f9c2de16ecb4dc3b2a9c02ddf07dd63"
  },
  {
    "url": "web/html/index.html",
    "revision": "a56c0162967d56c2881428a813e30f8e"
  },
  {
    "url": "web/index.html",
    "revision": "b8c94026e70253213d386d070c6aa2ad"
  },
  {
    "url": "web/js/index.html",
    "revision": "3faa0b378e32158ffdb09c80030f7c3f"
  },
  {
    "url": "web/js/jq.html",
    "revision": "951898449f221951cb53d06a14733d62"
  },
  {
    "url": "web/js/middle.html",
    "revision": "1e1301f2679ddefd4d73e0b2d7f099ac"
  },
  {
    "url": "web/performance/net.html",
    "revision": "b71b75b409f4723bd59ce704bed21689"
  },
  {
    "url": "web/principle/index.html",
    "revision": "51f41afad0b17b6c15d8093505eb1ca6"
  },
  {
    "url": "web/vue/core.html",
    "revision": "d902df20a24eb9480cb620dd1f5e3ec9"
  },
  {
    "url": "web/vue/vueCode.html",
    "revision": "6dac7ac9bd162d5360449450e01b0a51"
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
