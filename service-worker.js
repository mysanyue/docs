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
    "revision": "1d3fa2961e5897a3a13c86d2edad77fd"
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
    "url": "assets/js/11.f14dde3d.js",
    "revision": "53d240c4c21b07fa6fd6edb72392af4b"
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
    "url": "assets/js/14.031e989f.js",
    "revision": "39ce36a20626d14359f18ed24160972f"
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
    "url": "assets/js/app.606a629b.js",
    "revision": "dae7c29284edca41836fc7932f4dac4f"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "083935dc72fabe328d9fe3a9efeffa92"
  },
  {
    "url": "home.html",
    "revision": "04f0ca995d9e3577f2645b7c02178fe7"
  },
  {
    "url": "index.html",
    "revision": "11641f737d5b1366b2c2ab8fa6a255b2"
  },
  {
    "url": "selfExamin/index.html",
    "revision": "837438b9ada4826718dca9e9a82cf3af"
  },
  {
    "url": "selfExamin/infomationRules.html",
    "revision": "eca1d2072e7ecde862144c38a243167b"
  },
  {
    "url": "selfExamin/informationCon.html",
    "revision": "b4ec5a96d5cebfdc3cc4593b5dd8ffd6"
  },
  {
    "url": "selfExamin/resourceCon.html",
    "revision": "271854f26151e80e6f9ef02ca6867dc9"
  },
  {
    "url": "web/css/index.html",
    "revision": "058af059862d33eaf6dd28f5cdd34a03"
  },
  {
    "url": "web/html/index.html",
    "revision": "afb16df2289ba228e55a5e3edb6a0c34"
  },
  {
    "url": "web/index.html",
    "revision": "2c0642a0f2e0990b9bf425d62d031a84"
  },
  {
    "url": "web/js/index.html",
    "revision": "61f2bcdedeabdbd74bc2aae979eba3ad"
  },
  {
    "url": "web/js/jq.html",
    "revision": "1a23648c25f587b176c4a7d3c56d3eb7"
  },
  {
    "url": "web/js/middle.html",
    "revision": "3bb734ace482aae06c9c300a262dd0d8"
  },
  {
    "url": "web/performance/net.html",
    "revision": "ca12ba09ac4510298e0191a8e66f2d62"
  },
  {
    "url": "web/principle/index.html",
    "revision": "b06a98ac81b87163e0237f3413abb9cb"
  },
  {
    "url": "web/vue/core.html",
    "revision": "bd243bee87c16111953dfbe45becd565"
  },
  {
    "url": "web/vue/vueCode.html",
    "revision": "1df64b48d7555efde842471a10b20d21"
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
