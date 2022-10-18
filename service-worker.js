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
    "revision": "b2354d31f8355ee2ee11dfb81124e936"
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
    "url": "assets/images/js/__proto__.png",
    "revision": "d6ce9783a2c1547ec3b2bfce1c3dc4b4"
  },
  {
    "url": "assets/images/js/__proto__chain.png",
    "revision": "1bfe78a5784963cfaee320722113354b"
  },
  {
    "url": "assets/images/js/prototype.png",
    "revision": "6ddd5551c3a9c5bbbcbf9c2f120ba526"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b1034b2a.js",
    "revision": "a2f1097dd8e1ce7d169bf34af03fbd10"
  },
  {
    "url": "assets/js/11.1aef6912.js",
    "revision": "0f3054e85b6e9d828d34682f3f5df18d"
  },
  {
    "url": "assets/js/12.e775802c.js",
    "revision": "2598d26a7a8305554f0c122781fcd282"
  },
  {
    "url": "assets/js/13.2a29fe78.js",
    "revision": "4305e9bd4d8855898d0ab98f13e3b0eb"
  },
  {
    "url": "assets/js/14.b61000a1.js",
    "revision": "8c53c6f4fd3d5cf82960e49ca622e071"
  },
  {
    "url": "assets/js/15.11dc4644.js",
    "revision": "0ab4712ee3a0d0c13ca6652332d74756"
  },
  {
    "url": "assets/js/16.7471da33.js",
    "revision": "ec2fb5918465ba2c7abc97103ea6b0e2"
  },
  {
    "url": "assets/js/17.86ae1d53.js",
    "revision": "b03ffbd47f43e22f68a7186291c24c25"
  },
  {
    "url": "assets/js/18.141a7e7f.js",
    "revision": "63aafc10c7c959a6d2d3b5d699682922"
  },
  {
    "url": "assets/js/19.47832e27.js",
    "revision": "dc43777dd11a7055a0e8e24f3fbc87d9"
  },
  {
    "url": "assets/js/2.8bf9e0fc.js",
    "revision": "2496e759d25c036d056d978522fec081"
  },
  {
    "url": "assets/js/20.b36d605f.js",
    "revision": "0ad541eec3a3e66147d844a1ba7a282c"
  },
  {
    "url": "assets/js/21.3205a88e.js",
    "revision": "e9dc8c712b5f11750eb14750c5e60d1b"
  },
  {
    "url": "assets/js/22.9fcd8e43.js",
    "revision": "c7d9b8741e98b1c392f51553db43cea5"
  },
  {
    "url": "assets/js/23.8f3bf6d3.js",
    "revision": "612e3fc4af06175dae10b4eec8911c5d"
  },
  {
    "url": "assets/js/24.0fd9c4da.js",
    "revision": "4130423260ad6ecc5ff6b11207991e7f"
  },
  {
    "url": "assets/js/25.94f03042.js",
    "revision": "36dd62fb54783908ec370f5f0e435921"
  },
  {
    "url": "assets/js/26.f0337426.js",
    "revision": "0040b6ab8e98979ac94d139d10cc88fc"
  },
  {
    "url": "assets/js/27.85a7bcff.js",
    "revision": "46b3c930dab031c728c7919b8d77489c"
  },
  {
    "url": "assets/js/28.48147e2f.js",
    "revision": "7310e37dfbf12e0db22e6171fd697145"
  },
  {
    "url": "assets/js/29.346c8689.js",
    "revision": "634d552d2a2b08cac80798ca8f2f51e2"
  },
  {
    "url": "assets/js/3.6520bf08.js",
    "revision": "37a62f806f72762ac44687eeb819012f"
  },
  {
    "url": "assets/js/30.5ecc399e.js",
    "revision": "0fbd284479907a93070d09c773953054"
  },
  {
    "url": "assets/js/31.82d50643.js",
    "revision": "939e96604c3a84037799d7052860ebcc"
  },
  {
    "url": "assets/js/32.6d5b76a9.js",
    "revision": "9935a93383fc6bd2af85ae4edbe462ba"
  },
  {
    "url": "assets/js/33.509b272d.js",
    "revision": "c52050e571d75365b669c0cd7fb4a55a"
  },
  {
    "url": "assets/js/34.5a39e2cb.js",
    "revision": "82e9bfdd1eeeb0a6e347a35dfcf00693"
  },
  {
    "url": "assets/js/35.e147fe73.js",
    "revision": "ad98c162df5ed41eb98340e88e51edd5"
  },
  {
    "url": "assets/js/36.39c7132e.js",
    "revision": "757097f6613217076af2a76d6d12c5de"
  },
  {
    "url": "assets/js/37.86c73e7b.js",
    "revision": "b74c678a729e9622ccbf720ce51e75bf"
  },
  {
    "url": "assets/js/38.eec6cb5b.js",
    "revision": "7fcda95f967d40cbbead7e5ff46c9cbb"
  },
  {
    "url": "assets/js/39.de59a2f4.js",
    "revision": "7f31a9033a61093bdfccaa6a3244aa4c"
  },
  {
    "url": "assets/js/4.ce569f46.js",
    "revision": "f28d4db4cfb648648a895f051a09f990"
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
    "url": "assets/js/8.ebbb961e.js",
    "revision": "f5d77f53fab9821d86194982a9f780a4"
  },
  {
    "url": "assets/js/9.2748cce6.js",
    "revision": "d025868ffde8fbd75db3df4815ef4acd"
  },
  {
    "url": "assets/js/app.fa3e3cbe.js",
    "revision": "a9e0a425b57aaf4c0c3993f77259451d"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "f5b6be049b174a6263a9b7b5a34c825e"
  },
  {
    "url": "home.html",
    "revision": "df36eb322e7350b5c8c7117fac2fb11d"
  },
  {
    "url": "index.html",
    "revision": "27b20d4bd79f17cf938a3effee4015a0"
  },
  {
    "url": "node/msBase.html",
    "revision": "4533553699a06c7315df674aa720a823"
  },
  {
    "url": "performance/base.html",
    "revision": "583e66bfc8de9186bb5854a6e46706ed"
  },
  {
    "url": "performance/net.html",
    "revision": "a9e9d1692911d6c0c7dc5392f1872cd1"
  },
  {
    "url": "react/msBase.html",
    "revision": "dd7045fcabb8622a35a7b33457f5ae5c"
  },
  {
    "url": "self/ms1.html",
    "revision": "e751dc8d2c59cd20fc79be259b384cad"
  },
  {
    "url": "selfExamin/2017.html",
    "revision": "2446f59984850611bc18ce439a9ee11b"
  },
  {
    "url": "selfExamin/2019.html",
    "revision": "e8acf68302b6ea6aa542921652eee961"
  },
  {
    "url": "selfExamin/2020.html",
    "revision": "0d1bc2139185763cd96c01e96b0904de"
  },
  {
    "url": "selfExamin/index.html",
    "revision": "5632d8528544d9eea9e3eca675ec8cc7"
  },
  {
    "url": "suanf/base.html",
    "revision": "15e2122a3c056077a4b60514763c1083"
  },
  {
    "url": "vue/core.html",
    "revision": "1e6452661d1c67fd777327d80e133b44"
  },
  {
    "url": "vue/msBase.html",
    "revision": "c11d9f12a2bb6423e407ad119a43f478"
  },
  {
    "url": "vue/vueCode.html",
    "revision": "6e55f09cb37bc3ca56ec2cee651381fa"
  },
  {
    "url": "web/css/css3.html",
    "revision": "59df332f1fc33619adde3975f8ab0f31"
  },
  {
    "url": "web/css/cssBase1.html",
    "revision": "b1d94a687596e5e1e11f3b88c6d8fccc"
  },
  {
    "url": "web/css/cssBase2.html",
    "revision": "77681a7cabc97f208976dad135cd8875"
  },
  {
    "url": "web/html/h5.html",
    "revision": "eb494189395f6fb41d6031b09c05db43"
  },
  {
    "url": "web/html/htmlBase1.html",
    "revision": "92484ecb4a30a483699e492042eb8f9b"
  },
  {
    "url": "web/js/base1.html",
    "revision": "e3723953c350cbba4984d955825523d2"
  },
  {
    "url": "web/js/base2.html",
    "revision": "6223f74ebc2a229d079e1edfd8d0de46"
  },
  {
    "url": "web/js/jq.html",
    "revision": "f1f1f8ff61838fe304e3d790fbe4e064"
  },
  {
    "url": "web/js/middle.html",
    "revision": "0bf81d8f714961fbbdf48033834ccd0b"
  },
  {
    "url": "web/js/ms1.html",
    "revision": "7e6979657a3ab3fc3b53698a7611cff1"
  },
  {
    "url": "web/js/ms2.html",
    "revision": "22a70d4ba1920482b492473f2babb164"
  },
  {
    "url": "web/js/ms20211229.html",
    "revision": "19f91a9ec05fb5e24c47ae7dbfe04ada"
  },
  {
    "url": "web/js/ms20211230.html",
    "revision": "70bf143c3759d13df70f0cf2d519a3fe"
  },
  {
    "url": "web/js/node.html",
    "revision": "8dbae7b0cccaa73f35c8ffaaaff8f57e"
  },
  {
    "url": "wechat/ms1.html",
    "revision": "bd8704cc8d80a30eda61719e3bb17d6c"
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
