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
    "revision": "08ddc68470e0442af9378becaca70485"
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
    "url": "assets/js/13.968ceebb.js",
    "revision": "49a263210594f1a926bb90f4c71d5ed6"
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
    "url": "assets/js/app.acf075ae.js",
    "revision": "71f88ca38dd09743f315f43b17782049"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "60250b8388231e513659696fb57625fa"
  },
  {
    "url": "home.html",
    "revision": "4a6ed682b00d82d81d02d3849afc44e4"
  },
  {
    "url": "index.html",
    "revision": "c1ecc5fdb4eb259030aaf6ddc6b089e5"
  },
  {
    "url": "web/css/index.html",
    "revision": "6fc6b38135c4e85378c66e355cdb5e58"
  },
  {
    "url": "web/html/index.html",
    "revision": "7dac7866ee60c114defb5f7dfc947cd7"
  },
  {
    "url": "web/index.html",
    "revision": "51c534087bfea90a9305b7c8540aea60"
  },
  {
    "url": "web/js/index.html",
    "revision": "dde817db7ef11a202286395e45ca96a2"
  },
  {
    "url": "web/js/js-base.html",
    "revision": "4b94cde4e5dca8067c1988b6d82f2423"
  },
  {
    "url": "web/principle/index.html",
    "revision": "162ca414332f419e5026e160be6160c9"
  },
  {
    "url": "web/vue/core.html",
    "revision": "6d007896087eaa0e74301f7a66c8b734"
  },
  {
    "url": "web/vue/vueCode.html",
    "revision": "e333122887aba33feaaef0cae1867372"
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
