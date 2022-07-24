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
    "revision": "b655af4238aa778b1140039bf92a13aa"
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
    "url": "assets/images/html/ie-box.jpg",
    "revision": "cf4100c6f5cb012997ea73a80ed10cf4"
  },
  {
    "url": "assets/images/html/w3c-box.jpg",
    "revision": "3ac081075d305a0031701a9a3f9d9075"
  },
  {
    "url": "assets/images/js/scope.png",
    "revision": "c24a64550bdb61bcf15377055a7c61b0"
  },
  {
    "url": "assets/images/node-io.png",
    "revision": "a0aad842673b519bcbdc9ab68ad50686"
  },
  {
    "url": "assets/images/wechat-play.png",
    "revision": "f68f6552ce4e84e032eb53a3888c57f7"
  },
  {
    "url": "assets/img/2018-4-1.d3a2380b.png",
    "revision": "d3a2380b4fd95525480f5964f8b968c7"
  },
  {
    "url": "assets/img/2018-4-2.0497d70a.png",
    "revision": "0497d70ae079bc022d16cebc80523572"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6d4cafc1.js",
    "revision": "46468c2ab29b1fcc915de73736ee093f"
  },
  {
    "url": "assets/js/11.44eaddcc.js",
    "revision": "7de78c6ca8714da9cc1ec6055f4d4f4d"
  },
  {
    "url": "assets/js/12.7c868b61.js",
    "revision": "28ae259881c6c1114140b24765494c0a"
  },
  {
    "url": "assets/js/13.10be3d6e.js",
    "revision": "7688a1b7e2c1ec875d3170828718c84d"
  },
  {
    "url": "assets/js/14.1a0a09bc.js",
    "revision": "9163414e25a88289332581f203edd428"
  },
  {
    "url": "assets/js/15.ad61a1cf.js",
    "revision": "2e4c46f9aac6e6bc1f1ecab70b810c26"
  },
  {
    "url": "assets/js/16.97723887.js",
    "revision": "35cb79ffb6001d24c59e8f154b3b7309"
  },
  {
    "url": "assets/js/17.e5c5e747.js",
    "revision": "0194ace82f6a7d345ba21bf19eb421a6"
  },
  {
    "url": "assets/js/18.780f8e34.js",
    "revision": "5c605e424096465d58cb87d0ecfd68a1"
  },
  {
    "url": "assets/js/19.4c1ef670.js",
    "revision": "e76ef015bef1368cd626457894488780"
  },
  {
    "url": "assets/js/2.bd273a66.js",
    "revision": "ee02cdfa3b7b110e7d9449af3818932a"
  },
  {
    "url": "assets/js/20.53af6160.js",
    "revision": "00f561b691d27d66d2851a66c353a755"
  },
  {
    "url": "assets/js/21.f8b415ed.js",
    "revision": "3c880f9db97b202f0dd79bbc66cc062e"
  },
  {
    "url": "assets/js/22.fd619030.js",
    "revision": "a7cad46b3bf8a39ab09b752fdb2e6427"
  },
  {
    "url": "assets/js/23.9d210d87.js",
    "revision": "d3bb8412e8a8d9c9ac6968d5bd27a5ba"
  },
  {
    "url": "assets/js/24.152afd42.js",
    "revision": "7e745a89f73441a0c12b3740060041be"
  },
  {
    "url": "assets/js/25.5697301b.js",
    "revision": "3901c07b6e1a40485e32d9715c4076c4"
  },
  {
    "url": "assets/js/26.eb5a3a52.js",
    "revision": "56fd1964b855edae04110d0cf53d1a35"
  },
  {
    "url": "assets/js/27.296a5b84.js",
    "revision": "4b0b6f8c2335ca7ad1ee80cfb117a4c3"
  },
  {
    "url": "assets/js/28.c6f796a2.js",
    "revision": "9a4a92e0472d2b06c93fce4bf7fa14fc"
  },
  {
    "url": "assets/js/29.3f7aba88.js",
    "revision": "28e8fe37b9e14e9660c9717144f9ec88"
  },
  {
    "url": "assets/js/3.3659927b.js",
    "revision": "5ae2914bedb482a4eeaa56d2b4cf1e43"
  },
  {
    "url": "assets/js/30.6854eb4e.js",
    "revision": "4e2bec9b0ac3cffce4b7fe87e085e765"
  },
  {
    "url": "assets/js/31.e9b26028.js",
    "revision": "5d369ec659ca87b846f9a3285c3c6934"
  },
  {
    "url": "assets/js/32.f68f3a53.js",
    "revision": "fb4225476a81db8beced012c42c71a2c"
  },
  {
    "url": "assets/js/33.1761b514.js",
    "revision": "b70fe1aec1bf77ffbef0e6f1ae9ba17a"
  },
  {
    "url": "assets/js/34.17e2e48b.js",
    "revision": "b0eb6c3b5c0ffd25122960967efd03da"
  },
  {
    "url": "assets/js/35.8a066a9c.js",
    "revision": "61c08d5419541156269495a91d8853a2"
  },
  {
    "url": "assets/js/36.fc0d1848.js",
    "revision": "b9a53b9388422c49b9eef3e903551d29"
  },
  {
    "url": "assets/js/37.d5388dd7.js",
    "revision": "f6e2c84b6d021d08cd7b5e9ce3d06282"
  },
  {
    "url": "assets/js/38.851c1288.js",
    "revision": "a64a13a9dd36514e34f84b3f025b8e79"
  },
  {
    "url": "assets/js/4.2c0e1b26.js",
    "revision": "c603113907f282faab19410b013d5f3b"
  },
  {
    "url": "assets/js/5.44ef7197.js",
    "revision": "43b17c7c4f50a8a1879bc2d344f61426"
  },
  {
    "url": "assets/js/6.a9c2280f.js",
    "revision": "36176d9aad5426dcc82e46b6e401138f"
  },
  {
    "url": "assets/js/7.c5d64862.js",
    "revision": "66701305069693f966ef202146dfe49b"
  },
  {
    "url": "assets/js/8.445740d2.js",
    "revision": "b1aad2ce3967d8c978cbee7a4bf13cae"
  },
  {
    "url": "assets/js/9.457f3120.js",
    "revision": "2866f8a8ce366abbce8dc7a4db61c650"
  },
  {
    "url": "assets/js/app.b50306bc.js",
    "revision": "bb2e54ff9485d253d9b564a54617c29e"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "2b8259907e3f17b63a2def5d68dcfd90"
  },
  {
    "url": "home.html",
    "revision": "6c832e24a55d91c7140a118a9787432a"
  },
  {
    "url": "index.html",
    "revision": "01154eb0fa9ee94786b6ba37cd09754b"
  },
  {
    "url": "node/msBase.html",
    "revision": "9718c49eb4d9ffa86dbc62f6184514a9"
  },
  {
    "url": "performance/base.html",
    "revision": "d510ee08758641a0b4d0aad864ff8315"
  },
  {
    "url": "performance/net.html",
    "revision": "87b5f677e1d5c57f4fd37fae6e570a41"
  },
  {
    "url": "react/msBase.html",
    "revision": "e9495b96b9360127042858c83ab13a2e"
  },
  {
    "url": "selfExamin/index.html",
    "revision": "9f65bea3d7a50aa575cd8dbb244ae520"
  },
  {
    "url": "selfExamin/infomationRules.html",
    "revision": "6bae8d2fd5c0d124f890e76d68945348"
  },
  {
    "url": "selfExamin/informationCon.html",
    "revision": "6a2772abd6adbbf67de1efedee0903a1"
  },
  {
    "url": "selfExamin/resourceCon.html",
    "revision": "5b2a0cfed5bb9b8c5e0da4d627138a73"
  },
  {
    "url": "suanf/base.html",
    "revision": "9d7604005d119e42e470f24186caabef"
  },
  {
    "url": "vue/core.html",
    "revision": "dce3136d938315c1774760f4212f725c"
  },
  {
    "url": "vue/msBase.html",
    "revision": "5060ac95bd5ee88c227c0d899dde2022"
  },
  {
    "url": "vue/vueCode.html",
    "revision": "50a339ee5ef61f92d3f50eab9996d0b2"
  },
  {
    "url": "web/css/css3.html",
    "revision": "fad2bba569d6a341ab925fcd8cafc20d"
  },
  {
    "url": "web/css/cssBase1.html",
    "revision": "1530bddd7b4287cc881a41c284f0a2f0"
  },
  {
    "url": "web/css/cssBase2.html",
    "revision": "117442c5b2f2ac384b2c820579e1e99f"
  },
  {
    "url": "web/html/h5.html",
    "revision": "5a8e462472eafdffd0b4562412662667"
  },
  {
    "url": "web/html/htmlBase1.html",
    "revision": "3d5c238e1f8a96dbef8ffaaa22e7678b"
  },
  {
    "url": "web/js/base1.html",
    "revision": "ee1af3afdb4eb5f3089d5120463529ab"
  },
  {
    "url": "web/js/base2.html",
    "revision": "2f1337461c51b72dd58d319073e2ee83"
  },
  {
    "url": "web/js/jq.html",
    "revision": "1c116850214a5e71ba3c6cf3f6242a3b"
  },
  {
    "url": "web/js/middle.html",
    "revision": "00570b67d39baa0c5fc8300cbb41cecb"
  },
  {
    "url": "web/js/ms1.html",
    "revision": "247894b5916e4091c40c62573c7bc352"
  },
  {
    "url": "web/js/ms2.html",
    "revision": "c55bf7266af802699d4b1999583dec27"
  },
  {
    "url": "web/js/ms20211229.html",
    "revision": "8ee94ce93327d9e51df30a8b6eb9efc0"
  },
  {
    "url": "web/js/ms20211230.html",
    "revision": "101fe1832b5d646d65eb249af6385352"
  },
  {
    "url": "web/js/node.html",
    "revision": "4f0aec88469429b4c46191ec77106876"
  },
  {
    "url": "wechat/ms1.html",
    "revision": "a473b53307b430ae5be0353f8c6f6476"
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
