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
    "revision": "be32a8abc9cec18450cd51d3aa0ee60b"
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
    "url": "assets/css/0.styles.81887141.css",
    "revision": "c47ce1fed069ef8861b2721ab9bd32e5"
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
    "url": "assets/js/app.214350e0.js",
    "revision": "6b6a80da883b98a910e2dedad64e3a2f"
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
    "revision": "57b12e4728f81a53fd6c4a43c24ec58b"
  },
  {
    "url": "home.html",
    "revision": "49a7240dbbe86c58c3d5d48dafdcffac"
  },
  {
    "url": "index.html",
    "revision": "1f1c754cda66e68294cedcaf0bdae704"
  },
  {
    "url": "lagou/gitee/20201023.html",
    "revision": "93c2d959fb7c53d2e92bd7c6e5e13d2a"
  },
  {
    "url": "lagou/gitee/20201024.html",
    "revision": "5ec3ddd9dbc7877dc95b320dec9d7612"
  },
  {
    "url": "lagou/gitee/20201026.html",
    "revision": "5228950fa1675d039b7f1e5d2b21dbd0"
  },
  {
    "url": "lagou/gitee/20201027.html",
    "revision": "62fc0c014b3e2e20967c6d5fb0514416"
  },
  {
    "url": "lagou/gitee/20201029.html",
    "revision": "223212227d1256ea7bc004edc9c25c9a"
  },
  {
    "url": "lagou/gitee/20201102.html",
    "revision": "523a98f1ffbc8fe29f251aa295691ac5"
  },
  {
    "url": "lagou/gitee/20201105.html",
    "revision": "7f02f876358494852dd14340a17c1789"
  },
  {
    "url": "lagou/gitee/20201110.html",
    "revision": "49ae242c33b779ff659d6f84ca2e0505"
  },
  {
    "url": "lagou/index.html",
    "revision": "88e53571b45edcd0a27a5719d7921bd1"
  },
  {
    "url": "note/index.html",
    "revision": "385463c46d27db0c39ae8896711b288e"
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
