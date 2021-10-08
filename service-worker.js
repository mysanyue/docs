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
    "revision": "03f2401948221a5811da46f1ea902ad8"
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
    "url": "assets/js/11.47e52d9b.js",
    "revision": "0da9aba0ba821355e44c708d15780f2f"
  },
  {
    "url": "assets/js/12.e94d968e.js",
    "revision": "c74c97a5d7597a52fdb1a6d4844c4004"
  },
  {
    "url": "assets/js/13.7f3686e8.js",
    "revision": "5867017376c44aa2e96ca762ecb52352"
  },
  {
    "url": "assets/js/14.ebc7216b.js",
    "revision": "9b8e7a570214e71149e78da908d41df5"
  },
  {
    "url": "assets/js/15.0d38a965.js",
    "revision": "c4c677906401cbae7186f4de7e9601f0"
  },
  {
    "url": "assets/js/16.0dc98be8.js",
    "revision": "4978eaf19fb613db463ce1333af6e992"
  },
  {
    "url": "assets/js/17.daebee85.js",
    "revision": "b9e5bf0623d144bebb78b26a573c0e84"
  },
  {
    "url": "assets/js/18.91d5db14.js",
    "revision": "c2607caacadc2377279c861212362ec9"
  },
  {
    "url": "assets/js/19.0207fa9c.js",
    "revision": "52aa1006a087f7976a93e847bc829d85"
  },
  {
    "url": "assets/js/2.8bf9e0fc.js",
    "revision": "2496e759d25c036d056d978522fec081"
  },
  {
    "url": "assets/js/20.13956927.js",
    "revision": "dd465faa6828f290d18280f04d7454c4"
  },
  {
    "url": "assets/js/21.e86f2c19.js",
    "revision": "6cc59e448f0108598e634707214547a7"
  },
  {
    "url": "assets/js/22.f2ab470d.js",
    "revision": "83b412214dbcd8e5389a91b03cd40ef0"
  },
  {
    "url": "assets/js/23.3d2694b9.js",
    "revision": "782bf30df80ceaedec64ed7a7537e0d8"
  },
  {
    "url": "assets/js/24.75f78a9d.js",
    "revision": "77d14db7058ee92a1a38c02067613bbd"
  },
  {
    "url": "assets/js/25.75f83165.js",
    "revision": "4a95678aad0717d801ecded08729fcd4"
  },
  {
    "url": "assets/js/3.72d7682d.js",
    "revision": "05fe72240b53e11b7f4575d58c512e5e"
  },
  {
    "url": "assets/js/4.58d370bc.js",
    "revision": "5c06d424f6f5c5420f9b337e78cea86e"
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
    "url": "assets/js/app.e307923b.js",
    "revision": "0060c11e402adf13453cc3e30696657a"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "0607c9f15c3123b7c665072db8a07819"
  },
  {
    "url": "home.html",
    "revision": "8e4dec9069922fbf137752c562f0c4d2"
  },
  {
    "url": "index.html",
    "revision": "182a1fe9606a3a17b5ec99af5922dc01"
  },
  {
    "url": "selfExamin/index.html",
    "revision": "ed04a0da15045018abc462a57b28ea4f"
  },
  {
    "url": "selfExamin/infomationRules.html",
    "revision": "c74bdb73d6c592c740745492c3d696c3"
  },
  {
    "url": "selfExamin/informationCon.html",
    "revision": "4fba1e3781cf9c0d1f14a24bc844532b"
  },
  {
    "url": "selfExamin/resourceCon.html",
    "revision": "3979dd8ed9c9c33f79a89cdffd90e64e"
  },
  {
    "url": "web/css/index.html",
    "revision": "7cdf2428d96313c28d4e4d9689813163"
  },
  {
    "url": "web/html/index.html",
    "revision": "2e4b940340dc2c982728d71c7605246d"
  },
  {
    "url": "web/index.html",
    "revision": "f747d19924790d7b2f95e127c25b8b1f"
  },
  {
    "url": "web/js/index.html",
    "revision": "75e77dd7d5b00bc8877a12be8810d388"
  },
  {
    "url": "web/js/jq.html",
    "revision": "642fd1c1223c25305dd680afd7800971"
  },
  {
    "url": "web/js/middle.html",
    "revision": "6cedad5ec35a03c6f08804ef8bc97968"
  },
  {
    "url": "web/performance/net.html",
    "revision": "1bb6c057d4561db68016e2c9fe36abc0"
  },
  {
    "url": "web/principle/index.html",
    "revision": "a2b372076f58629b59992be2dda17351"
  },
  {
    "url": "web/vue/core.html",
    "revision": "5bce7749882189da5145da48a1d86dec"
  },
  {
    "url": "web/vue/vueCode.html",
    "revision": "5c16d45693e1c4ce2094d8700750870d"
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
