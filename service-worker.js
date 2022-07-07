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
    "revision": "5c9b32d937ddca12131a9656adcf2b16"
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
    "url": "assets/js/11.97bf68ba.js",
    "revision": "89b5e8c520a9da7b65b3d3e25d2f3aff"
  },
  {
    "url": "assets/js/12.f2b0f05a.js",
    "revision": "59aa04bdcd95b774a3c1c1e2ef4a3de6"
  },
  {
    "url": "assets/js/13.be5a5bde.js",
    "revision": "8900a598da882d74a7b33d6549ec26cb"
  },
  {
    "url": "assets/js/14.81dccba1.js",
    "revision": "770196447ba3deaf4f8d2214fe980014"
  },
  {
    "url": "assets/js/15.6379fa68.js",
    "revision": "3d9a96fdadbd996b91e2f75a7211328a"
  },
  {
    "url": "assets/js/16.144279ba.js",
    "revision": "236ee5177ccee0a7179397b5eee3b699"
  },
  {
    "url": "assets/js/17.70dff1ca.js",
    "revision": "95aa078b875bcb40c6b12812958b426f"
  },
  {
    "url": "assets/js/18.6a2d812b.js",
    "revision": "1231b1ddb1cb2189ab32fb6b1dab636b"
  },
  {
    "url": "assets/js/19.d6f0690c.js",
    "revision": "3cf71edb950787f69f0bf8837944df9d"
  },
  {
    "url": "assets/js/2.bd273a66.js",
    "revision": "ee02cdfa3b7b110e7d9449af3818932a"
  },
  {
    "url": "assets/js/20.7f31b6e9.js",
    "revision": "bff11aeb7d3d64853ecf9f8bcdeb7bd5"
  },
  {
    "url": "assets/js/21.2919daed.js",
    "revision": "5bcec65cf761b1b1dcaa3876c3553108"
  },
  {
    "url": "assets/js/22.44ab438a.js",
    "revision": "03c3878dce7d819edb0393ead6ef0c83"
  },
  {
    "url": "assets/js/23.5a6739df.js",
    "revision": "f8029bbcaedea74bc1edb483620664e9"
  },
  {
    "url": "assets/js/24.9dd27810.js",
    "revision": "2f442a9c782efb42b1ae4beaf1285545"
  },
  {
    "url": "assets/js/25.5d49757e.js",
    "revision": "282575be964bf3d5fa500ee2dfc52bde"
  },
  {
    "url": "assets/js/26.2fa82152.js",
    "revision": "950f3a37539d48c5c4fe627e0ca6637d"
  },
  {
    "url": "assets/js/27.a74d2c6c.js",
    "revision": "8b161ed33d45712cb226faac4849d7a8"
  },
  {
    "url": "assets/js/28.73c27f80.js",
    "revision": "9a4a92e0472d2b06c93fce4bf7fa14fc"
  },
  {
    "url": "assets/js/29.6b8d19a7.js",
    "revision": "9ca51f3ad1139dd4eeccbc17185a0903"
  },
  {
    "url": "assets/js/3.3659927b.js",
    "revision": "5ae2914bedb482a4eeaa56d2b4cf1e43"
  },
  {
    "url": "assets/js/30.034f3069.js",
    "revision": "94013cbc517a60e7abb5a0ce40a04577"
  },
  {
    "url": "assets/js/31.b30b7664.js",
    "revision": "02efef3f3cdb3d3f91bc386c43dab626"
  },
  {
    "url": "assets/js/32.618f6b93.js",
    "revision": "026c8d4f83db833e46269885d3d4985c"
  },
  {
    "url": "assets/js/33.3c68cddf.js",
    "revision": "55dafde6f0f1f2e4a9d6d5df330d14e1"
  },
  {
    "url": "assets/js/34.708135dc.js",
    "revision": "2c3dff89966a29b9938c2770b0e36831"
  },
  {
    "url": "assets/js/35.29c71821.js",
    "revision": "6993519fff4dc6e418f1541beca605c5"
  },
  {
    "url": "assets/js/36.4a688632.js",
    "revision": "700008899365f1b1d96e258951e10de9"
  },
  {
    "url": "assets/js/4.d06ef221.js",
    "revision": "8185dfa3c4bf3306bcd4d7d988b3e993"
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
    "url": "assets/js/7.dc58cd00.js",
    "revision": "ae1c7790397cbc0a137ada55d23e42be"
  },
  {
    "url": "assets/js/8.445740d2.js",
    "revision": "b1aad2ce3967d8c978cbee7a4bf13cae"
  },
  {
    "url": "assets/js/9.fc72d29f.js",
    "revision": "103eec09c1454d86e5096a2ee340dd27"
  },
  {
    "url": "assets/js/app.7dca8d57.js",
    "revision": "5aa75bf912c2a89d95a1d96423eadc82"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "ae3e16b92874fe1b053ede61fbff8fd1"
  },
  {
    "url": "home.html",
    "revision": "223eaa032d3e735d042a4065bf5ff831"
  },
  {
    "url": "index.html",
    "revision": "cc1a0e5dc6bb611c92861fd35af65b67"
  },
  {
    "url": "selfExamin/index.html",
    "revision": "0eeb01682bbae1c57f8277a6aa825dab"
  },
  {
    "url": "selfExamin/infomationRules.html",
    "revision": "434e10787a218c63d31d674a302371fe"
  },
  {
    "url": "selfExamin/informationCon.html",
    "revision": "462fc9993e88d1154d84c1f05d37c4cf"
  },
  {
    "url": "selfExamin/resourceCon.html",
    "revision": "80b6eefd327f42e63683e9aa219c5baf"
  },
  {
    "url": "web/css/css3.html",
    "revision": "cd285d9c78c85843472e3067fba7d2f8"
  },
  {
    "url": "web/css/cssBase1.html",
    "revision": "cd4d6496a3dab3cc43e875f66814e5af"
  },
  {
    "url": "web/css/cssBase2.html",
    "revision": "c4714a43d643fcf1c7325bd132d725e5"
  },
  {
    "url": "web/html/h5.html",
    "revision": "929604272a61e1ded05b1d2a1db105a9"
  },
  {
    "url": "web/html/htmlBase1.html",
    "revision": "4a6db32306b08cf421d076a9c659bbd6"
  },
  {
    "url": "web/index.html",
    "revision": "03e10164c5cd05ff24f9d991e2f38e7d"
  },
  {
    "url": "web/js/base.html",
    "revision": "1bfb1de527f03c953553f7606c5d62cc"
  },
  {
    "url": "web/js/index.html",
    "revision": "1b981cf9d2d37816971ac0e149893849"
  },
  {
    "url": "web/js/jq.html",
    "revision": "5ec3f4161f5ec2ebcf72a5bfa95cdc65"
  },
  {
    "url": "web/js/middle.html",
    "revision": "735ca83825e34a0a7df348d9dbe8e5bd"
  },
  {
    "url": "web/js/ms1.html",
    "revision": "367b02522c6e237250e92e234c7d03c2"
  },
  {
    "url": "web/js/ms2.html",
    "revision": "186db5b825a07d10c61b4e4a874fc6c5"
  },
  {
    "url": "web/js/ms20211229.html",
    "revision": "e18fcf45277ccc9c4869f8e00d92f18e"
  },
  {
    "url": "web/js/ms20211230.html",
    "revision": "a59a24e49dcdd024c71a6e19f30b3c95"
  },
  {
    "url": "web/js/node.html",
    "revision": "486c9dc6d42591f8a66cf68b496042bf"
  },
  {
    "url": "web/performance/base.html",
    "revision": "d5c3bfa21b9cd207e8e0b84926acae06"
  },
  {
    "url": "web/performance/net.html",
    "revision": "7aaf060c34f05e7f686054c595943393"
  },
  {
    "url": "web/principle/index.html",
    "revision": "8de85c1bf69980ee4bea875047575b88"
  },
  {
    "url": "web/suanf/base.html",
    "revision": "ecfd8ba963d5386b004a1c1846db7059"
  },
  {
    "url": "web/vue/core.html",
    "revision": "0d559947b28e3f7d697f28a132bf6aba"
  },
  {
    "url": "web/vue/vueCode.html",
    "revision": "fb84891e4fef184a61e6f9c4d4ab1667"
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
