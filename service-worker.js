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
    "revision": "28389f74746d41794a65cf367201b7fa"
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
    "url": "assets/js/16.c9a8d9e7.js",
    "revision": "bf4b7b8d1bbcab3ef71ab3a334e1c1f6"
  },
  {
    "url": "assets/js/17.b3e92a60.js",
    "revision": "2ae023333d768eacc4b2de8334ef063a"
  },
  {
    "url": "assets/js/18.1777db84.js",
    "revision": "c4f25a0e5a40f339fd0f50ab8972895d"
  },
  {
    "url": "assets/js/19.0779a47c.js",
    "revision": "3c7ab1680b9da332ad75c493477f4a23"
  },
  {
    "url": "assets/js/2.8bf9e0fc.js",
    "revision": "2496e759d25c036d056d978522fec081"
  },
  {
    "url": "assets/js/20.1456ec45.js",
    "revision": "40591be98c83fd08172bcb277bbc2d94"
  },
  {
    "url": "assets/js/21.5dde5878.js",
    "revision": "ca2dfd0d044adc7fc4c5e0884658cff3"
  },
  {
    "url": "assets/js/22.4419974e.js",
    "revision": "d185deb0f1eaac1ac8f57ba36ab8673b"
  },
  {
    "url": "assets/js/23.3c8a9f7d.js",
    "revision": "9573231ad83020764c7fd087ac709332"
  },
  {
    "url": "assets/js/24.37db83a2.js",
    "revision": "77d14db7058ee92a1a38c02067613bbd"
  },
  {
    "url": "assets/js/25.d8cac712.js",
    "revision": "1f491f07eac71a77a71700fb1e31bbe1"
  },
  {
    "url": "assets/js/26.ed2da258.js",
    "revision": "a12c717965af9dc8cff250dd0967e39f"
  },
  {
    "url": "assets/js/27.ba763758.js",
    "revision": "ad0c11a3fdc80f050002910ebfddc3c4"
  },
  {
    "url": "assets/js/28.f2f64d1a.js",
    "revision": "0cc31ec803ee7636a7756ec24b090a0d"
  },
  {
    "url": "assets/js/29.b15b3c75.js",
    "revision": "e8e72cb918d2ab052b581408beae6efd"
  },
  {
    "url": "assets/js/3.6520bf08.js",
    "revision": "37a62f806f72762ac44687eeb819012f"
  },
  {
    "url": "assets/js/30.7871cefd.js",
    "revision": "de794cfc6c7bb270e23e10177f327b67"
  },
  {
    "url": "assets/js/31.c68095f5.js",
    "revision": "f613f2ec481689aaab500ea09a2d9e3c"
  },
  {
    "url": "assets/js/32.7c0a78c7.js",
    "revision": "60bffea67adc16ac6a2c82e0466e6a59"
  },
  {
    "url": "assets/js/33.66997fcd.js",
    "revision": "76a5508ea378f2053a513270ed013d23"
  },
  {
    "url": "assets/js/34.bed460dc.js",
    "revision": "afa38e85fb954fd838cbe6691073fe81"
  },
  {
    "url": "assets/js/35.aaf985c8.js",
    "revision": "d5291f67c4e35de055a2ecd566278e65"
  },
  {
    "url": "assets/js/36.322e2547.js",
    "revision": "f82b5d4e2985fda3c80a052ef20cb3f6"
  },
  {
    "url": "assets/js/37.8b0bb316.js",
    "revision": "4a0cae44feb7cec43e0e55f1c9186b9a"
  },
  {
    "url": "assets/js/38.27d8be60.js",
    "revision": "628bcc4f3ded93b221da81e76b3a6536"
  },
  {
    "url": "assets/js/39.01cdcfbe.js",
    "revision": "e4c046752bfac4fd3c0d70f20ccf517c"
  },
  {
    "url": "assets/js/4.de1269a5.js",
    "revision": "9b3b893c84efa6585eaae0aa5b326722"
  },
  {
    "url": "assets/js/40.5c274d85.js",
    "revision": "74ca9cd7345691730c0116347548e6c3"
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
    "url": "assets/js/app.037df01f.js",
    "revision": "1f128198b80d6fed3643736d6158a119"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "ebd3237b945cd1d6e1613179fda793b1"
  },
  {
    "url": "home.html",
    "revision": "72f898699f74c277fd0846a3a746eaa8"
  },
  {
    "url": "index.html",
    "revision": "53c79bbff986f7b3061f30bbb98f2e6c"
  },
  {
    "url": "node/msBase.html",
    "revision": "afffe7fe48b413022ac83ae2081d7f45"
  },
  {
    "url": "performance/base.html",
    "revision": "ebf22e6321b167371d724d6de0555f65"
  },
  {
    "url": "performance/net.html",
    "revision": "b072e4526ab3599f0e032cbe63fffb77"
  },
  {
    "url": "react/msBase.html",
    "revision": "56b857cae52b3914925931a050a1ddcd"
  },
  {
    "url": "self/ms1.html",
    "revision": "812802eaeb6b414343975ce74849095b"
  },
  {
    "url": "selfExamin/2017.html",
    "revision": "d9263569f23994e6b6b237d5e505bfc9"
  },
  {
    "url": "selfExamin/2018.html",
    "revision": "5ee89631036e71826ed9e723114c6a4b"
  },
  {
    "url": "selfExamin/2019.html",
    "revision": "61f384c607b938ddcd0cf357836f2ae6"
  },
  {
    "url": "selfExamin/2020.html",
    "revision": "85b110a24163d7b03398f6b76ccd121b"
  },
  {
    "url": "selfExamin/index.html",
    "revision": "e62eae12fce1ff22a28fcba6862d5fc4"
  },
  {
    "url": "suanf/base.html",
    "revision": "109896458cbb74a982cdc1f61a85414f"
  },
  {
    "url": "vue/core.html",
    "revision": "15624fac34f6c0c8a6e0c60c52aa07cc"
  },
  {
    "url": "vue/msBase.html",
    "revision": "c583928972e60f21bea23c54da1ed855"
  },
  {
    "url": "vue/vueCode.html",
    "revision": "7726dc45d3e361fa251b9f0302a9f5e5"
  },
  {
    "url": "web/css/css3.html",
    "revision": "46fa38881981ac531a07877f6a32d813"
  },
  {
    "url": "web/css/cssBase1.html",
    "revision": "4ed98fa7f02ad223b2e2f687d0223c93"
  },
  {
    "url": "web/css/cssBase2.html",
    "revision": "acc93efd8ec13c21c2f6467a9418c1cd"
  },
  {
    "url": "web/html/h5.html",
    "revision": "0a6d0100a2f3135e0f199732823e1072"
  },
  {
    "url": "web/html/htmlBase1.html",
    "revision": "655ad918af8b4022170992ed9f2fe550"
  },
  {
    "url": "web/js/base1.html",
    "revision": "f0ec133656e4c4c02eaf2fbc7d0f9f75"
  },
  {
    "url": "web/js/base2.html",
    "revision": "00e8501857af36d8f09686aa53915dc0"
  },
  {
    "url": "web/js/jq.html",
    "revision": "7c8d8054fa45e977c4bf7aa881d1b7ad"
  },
  {
    "url": "web/js/middle.html",
    "revision": "c5af552ae016655733849d27cfd50b17"
  },
  {
    "url": "web/js/ms1.html",
    "revision": "0e4d68f14182d188dde5e039fc92c4a7"
  },
  {
    "url": "web/js/ms2.html",
    "revision": "ae4bc4bb7b27f7eebb74bb7115ed755e"
  },
  {
    "url": "web/js/ms20211229.html",
    "revision": "cc40741b7baad36a90b4ef66eddbbbc3"
  },
  {
    "url": "web/js/ms20211230.html",
    "revision": "03cd54254691be209551d626ae2a0071"
  },
  {
    "url": "web/js/node.html",
    "revision": "b1647dc8f73e649dd60acefe5587d7f4"
  },
  {
    "url": "wechat/ms1.html",
    "revision": "a3c9bbc4642177c6427bb1bf8bfce259"
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
