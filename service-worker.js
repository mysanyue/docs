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
    "revision": "fb7b93e686227aee1361974b5b279752"
  },
  {
    "url": "about/index.html",
    "revision": "5a28e8243b94c6bbf9cd14f8a3014b58"
  },
  {
    "url": "assets/css/0.styles.81887141.css",
    "revision": "c47ce1fed069ef8861b2721ab9bd32e5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8c355245.js",
    "revision": "f8754f6201404c3a6476e0848c7f4e0c"
  },
  {
    "url": "assets/js/11.653a3a5a.js",
    "revision": "5c38a380acd0a9b5def24cd35b4eba02"
  },
  {
    "url": "assets/js/12.02f7939e.js",
    "revision": "9d21103688f915e66280c743a3780623"
  },
  {
    "url": "assets/js/13.abf2df7f.js",
    "revision": "be75d4f7c95396bb80ca77b48b206ae8"
  },
  {
    "url": "assets/js/14.f2960b65.js",
    "revision": "1ec8eb53b380f0ec4c9c04100d81ddac"
  },
  {
    "url": "assets/js/15.8e080740.js",
    "revision": "af24a298563818a37c80dfffc6df42ee"
  },
  {
    "url": "assets/js/16.2eb08462.js",
    "revision": "ccdb50bba1a17ec82f893c4b0b060903"
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
    "url": "assets/js/4.48681915.js",
    "revision": "7f88d9678fabb052031c97ed2aab6cf7"
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
    "url": "assets/js/9.b7b3ce06.js",
    "revision": "33a41802aedc4ea9b2bfd11ed57f7f70"
  },
  {
    "url": "assets/js/app.5913b163.js",
    "revision": "addf5cc1b99ff6c0b4dcee5e2e956a20"
  },
  {
    "url": "assets/logo.gif",
    "revision": "d25a6cc85d301d3573a94d6d96a747f6"
  },
  {
    "url": "css/c-a.html",
    "revision": "b3f1ec5e8b7c9d102dbc431f82fab044"
  },
  {
    "url": "css/c-b.html",
    "revision": "c874087b485f9cfca3a63a949d4eb62a"
  },
  {
    "url": "css/c-c.html",
    "revision": "8248676a71a74f248c9bed8a8fe3e793"
  },
  {
    "url": "css/index.html",
    "revision": "f29d32525e2aba1bc13b22eb7622c2bc"
  },
  {
    "url": "index.html",
    "revision": "d02d43b68a890f725141519110b20ec1"
  },
  {
    "url": "js.html",
    "revision": "f6102d03535688761ccae79a9069632c"
  },
  {
    "url": "js2.html",
    "revision": "a3f434b06b3c18eaf0f3eccc18fcc1b6"
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
