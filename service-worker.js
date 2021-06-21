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
    "revision": "80a00ba7cdda108e05faabcc54120561"
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
    "url": "assets/css/0.styles.4230e9f4.css",
    "revision": "d79fa73a1f4055b9348d6a1549f7bb42"
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
    "url": "assets/js/10.e6b344c2.js",
    "revision": "deec66cd37e4e2fbee4ab1e4a722c164"
  },
  {
    "url": "assets/js/11.5cab05f0.js",
    "revision": "1e3b8b03759d0d36e663d18fe325918d"
  },
  {
    "url": "assets/js/12.c5c1c2ca.js",
    "revision": "c74c97a5d7597a52fdb1a6d4844c4004"
  },
  {
    "url": "assets/js/13.6f82f3c7.js",
    "revision": "77efb5428c9d593b035fc67b1ebe56d5"
  },
  {
    "url": "assets/js/14.e489e2c0.js",
    "revision": "6d47e51d1af6c29bf9fec4941f4bb308"
  },
  {
    "url": "assets/js/15.be42f8ac.js",
    "revision": "433e755d807e14662f5eea70dffbb38d"
  },
  {
    "url": "assets/js/16.56b0005f.js",
    "revision": "42b54d1f6499f5b8bac25ae7b18ec62d"
  },
  {
    "url": "assets/js/17.8bf4b395.js",
    "revision": "8a06834aa925275bdd28a9a4bf905b3a"
  },
  {
    "url": "assets/js/18.434a68dc.js",
    "revision": "aaaefc69579b5ceff03010742ba4f8a5"
  },
  {
    "url": "assets/js/19.78cd33d7.js",
    "revision": "b0a77d8a6a571db522226d505fbb9a6c"
  },
  {
    "url": "assets/js/2.8751a15c.js",
    "revision": "4328b319e4ebb541d88218cfb59fcdc1"
  },
  {
    "url": "assets/js/20.a90f55e1.js",
    "revision": "2fcae43c6dde5e67e9345791b4137728"
  },
  {
    "url": "assets/js/21.bab49707.js",
    "revision": "824120ec0386bb0fdc090f198044463c"
  },
  {
    "url": "assets/js/22.79696249.js",
    "revision": "ae934e0cf168dd759f9840f903e825b0"
  },
  {
    "url": "assets/js/3.8abf82f5.js",
    "revision": "42d06aae7380fdbd1a420a14e1f6f06e"
  },
  {
    "url": "assets/js/4.b9a5aaa1.js",
    "revision": "b1e270c2a2ae0f28d103d11d08b31af4"
  },
  {
    "url": "assets/js/5.7f0eb621.js",
    "revision": "b11a747a84d24b6222b63874f5fe4d4c"
  },
  {
    "url": "assets/js/6.929ba44f.js",
    "revision": "b892367e0a5eee716e2ae233d747eeb3"
  },
  {
    "url": "assets/js/7.6b7619d7.js",
    "revision": "dcfdbf395b35f0d43500aab5b3d36471"
  },
  {
    "url": "assets/js/8.b4947345.js",
    "revision": "ed43bb5cf1a3540e45a7d97436e54a5e"
  },
  {
    "url": "assets/js/9.e87d8020.js",
    "revision": "dfcc419b51a99ab93cd19cbe193177d2"
  },
  {
    "url": "assets/js/app.fa1e2dc4.js",
    "revision": "8834b8ea5d2b0c8696a4f0681beb7c88"
  },
  {
    "url": "assets/logo.gif",
    "revision": "d25a6cc85d301d3573a94d6d96a747f6"
  },
  {
    "url": "assets/logo.jpg",
    "revision": "489f6773f1b42485c6f8befa6589fe46"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "3a237526337333e4c40ebc36cb91f51a"
  },
  {
    "url": "home.html",
    "revision": "8090066643d2ae5caa97aa74644c252c"
  },
  {
    "url": "index.html",
    "revision": "d74315b887dc4866c03b6526c98d364d"
  },
  {
    "url": "intermediate/index.html",
    "revision": "3e941aa33195b9bb4d89ddf60691b09d"
  },
  {
    "url": "intermediate/principle/index.html",
    "revision": "88c461d8ccc093af7ac487dd387076fe"
  },
  {
    "url": "intermediate/vue/core.html",
    "revision": "17749124fce1d1353c8760be0d340057"
  },
  {
    "url": "intermediate/vue/test.html",
    "revision": "9cca9b1147f1ea5664db33cc3475e376"
  },
  {
    "url": "intermediate/vue/vueCode.html",
    "revision": "775d6187d13fb9131bb3b250f114b693"
  },
  {
    "url": "primary/css/index.html",
    "revision": "904f1849233013866ffed61cf9d10070"
  },
  {
    "url": "primary/html/index.html",
    "revision": "be38c5d3dc08ed33d4c05fd73b4bd3ab"
  },
  {
    "url": "primary/index.html",
    "revision": "09d6863b4060b115bce900940f6187ef"
  },
  {
    "url": "primary/js/index.html",
    "revision": "b4f8b9722c5fa5ff77fbd8c1d72b0aaf"
  },
  {
    "url": "primary/principle/index.html",
    "revision": "c5d572bbeb34e356f53be07148f77574"
  },
  {
    "url": "senior/index.html",
    "revision": "28326206175de6bf6348729e16037236"
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
