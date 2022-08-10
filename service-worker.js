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
    "revision": "a1c75ec8b31cb139f97f6fb2de473f3d"
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
    "url": "assets/js/16.9536f48a.js",
    "revision": "40cff04a6ed95979479149b4879f064f"
  },
  {
    "url": "assets/js/17.619a57c7.js",
    "revision": "670e0dda36b7cbef0aa2499c885bfbc5"
  },
  {
    "url": "assets/js/18.b744ecf3.js",
    "revision": "ed1ec6ec14414f3368c63f9acaf21c1a"
  },
  {
    "url": "assets/js/19.0e5f527c.js",
    "revision": "410cf11fe14744a6087798e7444921d6"
  },
  {
    "url": "assets/js/2.bd273a66.js",
    "revision": "ee02cdfa3b7b110e7d9449af3818932a"
  },
  {
    "url": "assets/js/20.4247c365.js",
    "revision": "eac6ddafcde57cc0ceb95e71a352455d"
  },
  {
    "url": "assets/js/21.48d46ec9.js",
    "revision": "030f36e2b09beecf31eb00c6df9e3d90"
  },
  {
    "url": "assets/js/22.325dcd48.js",
    "revision": "6bcde3691fd4dfb016def59ae34a3d3d"
  },
  {
    "url": "assets/js/23.8d688876.js",
    "revision": "4452ccba157ec324e59cac1c853555f6"
  },
  {
    "url": "assets/js/24.2a285929.js",
    "revision": "e2063622ba29ac277e55e5f0042f3815"
  },
  {
    "url": "assets/js/25.4e1f2bc0.js",
    "revision": "9aff2933e173725de1edb17d16fbe667"
  },
  {
    "url": "assets/js/26.c6e6040e.js",
    "revision": "0a6c5a9ebaecf8df5b5d1ef5cdced0d8"
  },
  {
    "url": "assets/js/27.26de3f4a.js",
    "revision": "2cd46c1088a1c340abaa5bd364df7187"
  },
  {
    "url": "assets/js/28.af7164d9.js",
    "revision": "c8dc05df7e576298cc37266320488e27"
  },
  {
    "url": "assets/js/29.19688c3e.js",
    "revision": "ceef1bb573858cacde22ae01d25fbc6c"
  },
  {
    "url": "assets/js/3.3659927b.js",
    "revision": "5ae2914bedb482a4eeaa56d2b4cf1e43"
  },
  {
    "url": "assets/js/30.030dd142.js",
    "revision": "b9ba2a7f87ffe9f71226fb9501381586"
  },
  {
    "url": "assets/js/31.8815bca9.js",
    "revision": "d884dab94edafdf4c882e94497716c05"
  },
  {
    "url": "assets/js/32.c0c5a91c.js",
    "revision": "1458a250a75bbbf2cf4403eb0bc9c0ee"
  },
  {
    "url": "assets/js/33.42c52a4e.js",
    "revision": "779f987e4d2473d172845297885c6599"
  },
  {
    "url": "assets/js/34.b063fc19.js",
    "revision": "330fdb7cf85f7d0626d5d0eabe87c78f"
  },
  {
    "url": "assets/js/35.298965ef.js",
    "revision": "cb9b1924626977a4acc953500d5a295a"
  },
  {
    "url": "assets/js/36.062a7769.js",
    "revision": "abcac1b5bd3b27d6a86d6e52144d4769"
  },
  {
    "url": "assets/js/37.1c2f981b.js",
    "revision": "aa7a3484a433e47f226182b42ecc4825"
  },
  {
    "url": "assets/js/38.cd6a8054.js",
    "revision": "492675fae256b945a5a0ee587d4814fc"
  },
  {
    "url": "assets/js/39.a18c8566.js",
    "revision": "1ea6f12b56478281b1b3999252763436"
  },
  {
    "url": "assets/js/4.c8a8f85a.js",
    "revision": "67548f4ee41b0399f8e7c03413a48dd3"
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
    "url": "assets/js/7.f5259033.js",
    "revision": "7776b3267eb4eb4291fde6b32e71c181"
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
    "url": "assets/js/app.03b39971.js",
    "revision": "5f64e0b45e230e399f7eb26de1a7182d"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "e9ad728b65e3af4c68f16d663515954f"
  },
  {
    "url": "home.html",
    "revision": "77077c2905d052620a9f80c2a9aac3b4"
  },
  {
    "url": "index.html",
    "revision": "11ecce706c3f6301c35d8e8ff85e721c"
  },
  {
    "url": "node/msBase.html",
    "revision": "c4cf3ac27b0bbd0b01186b5ed6e99e7d"
  },
  {
    "url": "performance/base.html",
    "revision": "e3e81b223a6665b3e7a5d099d5dbe020"
  },
  {
    "url": "performance/net.html",
    "revision": "eb38831a6fa832730bd0ca187df45c73"
  },
  {
    "url": "react/msBase.html",
    "revision": "69ecbde14998a3ef24105fdbed8a7ef7"
  },
  {
    "url": "self/ms1.html",
    "revision": "0d00a1a37bcab43e02afe7736297cb7c"
  },
  {
    "url": "selfExamin/index.html",
    "revision": "8e958bb4952cdc977ed9b0374aab8d4d"
  },
  {
    "url": "selfExamin/infomationRules.html",
    "revision": "50b7cea5f8b573182b2e67cd3d61a778"
  },
  {
    "url": "selfExamin/informationCon.html",
    "revision": "8c7d41326433e08b86bacef6e455e5ad"
  },
  {
    "url": "selfExamin/resourceCon.html",
    "revision": "3add2d767ac52f068343d164e4be89a7"
  },
  {
    "url": "suanf/base.html",
    "revision": "b12f2c7c67437ae1bd40318b813b2a27"
  },
  {
    "url": "vue/core.html",
    "revision": "20793e3a2830178b99fb826bbe50fe2d"
  },
  {
    "url": "vue/msBase.html",
    "revision": "abb28312d2becdfbe29c41b53351710b"
  },
  {
    "url": "vue/vueCode.html",
    "revision": "2684159fceaf69871f7d2e28f04cb6b9"
  },
  {
    "url": "web/css/css3.html",
    "revision": "be5e831fbd57eda9bb3d2091aa1a24c4"
  },
  {
    "url": "web/css/cssBase1.html",
    "revision": "b44305a2cab922d50c0d8e801907ca58"
  },
  {
    "url": "web/css/cssBase2.html",
    "revision": "0c878e32898bbcd56242dafc5c99bac8"
  },
  {
    "url": "web/html/h5.html",
    "revision": "147c8629dc213d75f683af7197379813"
  },
  {
    "url": "web/html/htmlBase1.html",
    "revision": "45db9c7a29f73f2222bab2383b4e8dfa"
  },
  {
    "url": "web/js/base1.html",
    "revision": "e5fb880a645c5e4589a1da83efe8f528"
  },
  {
    "url": "web/js/base2.html",
    "revision": "c8ce7c9bf87fab26df41d205121b19e7"
  },
  {
    "url": "web/js/jq.html",
    "revision": "c606e4ecd934962e6602d79a6a6df56f"
  },
  {
    "url": "web/js/middle.html",
    "revision": "c54073d9106513f4b1ddff686d04f887"
  },
  {
    "url": "web/js/ms1.html",
    "revision": "086545108905b0650c3d8b1999de6f7d"
  },
  {
    "url": "web/js/ms2.html",
    "revision": "ab52fccc792c98299e7d486db79cc4ce"
  },
  {
    "url": "web/js/ms20211229.html",
    "revision": "b78b2be9b98bad37515c76ad152e4b72"
  },
  {
    "url": "web/js/ms20211230.html",
    "revision": "74882fb82939769b6dd67470c230c37e"
  },
  {
    "url": "web/js/node.html",
    "revision": "691a91baacb87c534ffe33e412c5a66f"
  },
  {
    "url": "wechat/ms1.html",
    "revision": "c99fa2bac6c041117b79c59b8f85f8b1"
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
