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
    "revision": "4254152d7e29cf63c60e727f5b935ccb"
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
    "url": "assets/css/0.styles.d9172712.css",
    "revision": "b463e6bdfcc984e8b2745dfe2b74c335"
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
    "url": "assets/js/11.6ba2ba2a.js",
    "revision": "e800102d8b78704c5b9d912f562bceed"
  },
  {
    "url": "assets/js/12.4bb2bc56.js",
    "revision": "0b8ae48318dc9cf430ce9495b9d39b80"
  },
  {
    "url": "assets/js/13.65637da3.js",
    "revision": "e1a75870b2619028ba94112c964fbc42"
  },
  {
    "url": "assets/js/14.2c817e13.js",
    "revision": "7898407846ea4c00c3eca8a98374f380"
  },
  {
    "url": "assets/js/15.70c286a8.js",
    "revision": "6a5b60baea7f01341d47d72329bc36f1"
  },
  {
    "url": "assets/js/16.182203a3.js",
    "revision": "0314616fbc0469c9ea51cbfe3a3d21a9"
  },
  {
    "url": "assets/js/17.07be6971.js",
    "revision": "0ff0e5ef41de1e15d73664523217a0f7"
  },
  {
    "url": "assets/js/18.c28253d3.js",
    "revision": "d724f5bba78748879252b64421cad307"
  },
  {
    "url": "assets/js/19.044b018a.js",
    "revision": "d1f4b51c5125b29550f217bcc8edc3d3"
  },
  {
    "url": "assets/js/2.8a356b46.js",
    "revision": "aedc6d4be19f4bc1bba4ff26dcdaa3d0"
  },
  {
    "url": "assets/js/20.8377691c.js",
    "revision": "1d2eb0ba839a240068a65062edc6a596"
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
    "url": "assets/js/9.99a53e74.js",
    "revision": "bd64610daf607abdae5343c4d1352e70"
  },
  {
    "url": "assets/js/app.bdf650a0.js",
    "revision": "912d591a05f4569790042ce7cb3c1f45"
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
    "url": "base/index.html",
    "revision": "4ac79c14ee6d66eb0ccefe9289b47c15"
  },
  {
    "url": "home.html",
    "revision": "e4a9e9f6bb2ba72e19310e4c42b4ea8b"
  },
  {
    "url": "index.html",
    "revision": "ff03764955ec9c05ba4a9f8acca6f513"
  },
  {
    "url": "lagou/gitee/20201023.html",
    "revision": "bb3db6ac1403babec919fca294e6245a"
  },
  {
    "url": "lagou/gitee/20201024.html",
    "revision": "c52f49c5e8051634f14e6c1f6f8096da"
  },
  {
    "url": "lagou/gitee/20201026.html",
    "revision": "50ea5e3fef785359d66bbe676b1abe25"
  },
  {
    "url": "lagou/gitee/20201027.html",
    "revision": "c4181aa67cdac7dca7021130fbdd1651"
  },
  {
    "url": "lagou/gitee/20201029.html",
    "revision": "432ee97c4ee25064b1db9cd85a25b219"
  },
  {
    "url": "lagou/gitee/20201102.html",
    "revision": "ad581a9f64c4faf037063381eafbadbb"
  },
  {
    "url": "lagou/gitee/20201105.html",
    "revision": "20a7bcad7996acd1fe4174a8c9e9fdc7"
  },
  {
    "url": "lagou/gitee/20201110.html",
    "revision": "4b4c4077121a88bb5c27c7827ea7d6b8"
  },
  {
    "url": "lagou/index.html",
    "revision": "c2ea2163091750fc469d62ee6faaa630"
  },
  {
    "url": "note/index.html",
    "revision": "bc9889b19055792cc816ed054ee1a132"
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
