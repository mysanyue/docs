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
    "revision": "02878b1129a4f0836952512578a40b9b"
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
    "url": "assets/js/11.040908c9.js",
    "revision": "3ee876e54d2752be167aaa188cb3df41"
  },
  {
    "url": "assets/js/12.90f19050.js",
    "revision": "b739b9f0bd8bfd0655c9177ffdeae150"
  },
  {
    "url": "assets/js/13.068b977d.js",
    "revision": "8c315edd1716d1b25ce3de635680cc44"
  },
  {
    "url": "assets/js/14.09d7d782.js",
    "revision": "d250136645b7a3dc63ebd8b8920287f0"
  },
  {
    "url": "assets/js/15.f5f9a854.js",
    "revision": "618f246f8e5ef7f911a6b10206c7f00e"
  },
  {
    "url": "assets/js/16.34a084e2.js",
    "revision": "0d22615ed07d656f69b662202090edcc"
  },
  {
    "url": "assets/js/17.ecb73831.js",
    "revision": "f21cb5662117db49ef629475565ee63c"
  },
  {
    "url": "assets/js/18.c78f4cf6.js",
    "revision": "7a93bcd88b0a912a4b58ce5e52569bed"
  },
  {
    "url": "assets/js/19.b9b6c3cd.js",
    "revision": "99f5c1955261fae38e8f850464c9f673"
  },
  {
    "url": "assets/js/2.bd273a66.js",
    "revision": "ee02cdfa3b7b110e7d9449af3818932a"
  },
  {
    "url": "assets/js/20.d0c54f3e.js",
    "revision": "aea514f09c84a106036b12a2bac68646"
  },
  {
    "url": "assets/js/21.9a86361d.js",
    "revision": "9ba0b58f6974b0073a8d2bc598ff64d9"
  },
  {
    "url": "assets/js/22.3dd71087.js",
    "revision": "a08b002b39ea73f02d88cea1f3df2025"
  },
  {
    "url": "assets/js/23.bc791679.js",
    "revision": "80e4b33722875be6288c2b1a094a43a9"
  },
  {
    "url": "assets/js/24.8f1a1eac.js",
    "revision": "c842415f0112affd95b9f93cd33088b9"
  },
  {
    "url": "assets/js/25.f3d38b6f.js",
    "revision": "38702f11925eeaecb106d0b1d4cab58d"
  },
  {
    "url": "assets/js/26.59cd310b.js",
    "revision": "77dd734f9416b7b870c68506abbfb646"
  },
  {
    "url": "assets/js/27.f86fd18c.js",
    "revision": "ebce47ac9a96d50d2db7176be51e17cb"
  },
  {
    "url": "assets/js/28.4c0eba38.js",
    "revision": "966f41abecf1663877a0df5390072880"
  },
  {
    "url": "assets/js/29.3c57b366.js",
    "revision": "820d344c8f2e0a4296427c9856f40c44"
  },
  {
    "url": "assets/js/3.3659927b.js",
    "revision": "5ae2914bedb482a4eeaa56d2b4cf1e43"
  },
  {
    "url": "assets/js/30.d9d8512b.js",
    "revision": "f79484633fc7aadeee2f6d544fdde96d"
  },
  {
    "url": "assets/js/31.fc6b7c14.js",
    "revision": "8c745884ed431fa8b9f98aa6cb47bc52"
  },
  {
    "url": "assets/js/32.d86ff869.js",
    "revision": "d01582c92136b59f97e5a1dcbdaff05c"
  },
  {
    "url": "assets/js/33.4c549727.js",
    "revision": "c59938d18293448d1f92c5734db95ac8"
  },
  {
    "url": "assets/js/34.df19ffad.js",
    "revision": "53de1efa2cb5f03a79a3519e9f694a13"
  },
  {
    "url": "assets/js/35.0998c09a.js",
    "revision": "adaef5f67e30e92dc0e05d8b8341e6f7"
  },
  {
    "url": "assets/js/4.58c49c28.js",
    "revision": "ff241fc49f76556a0b1c551e9a223867"
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
    "url": "assets/js/7.3600b237.js",
    "revision": "efde71486a996e9e34458907fb219d64"
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
    "url": "assets/js/app.5582efc2.js",
    "revision": "03506adbde0aadd80efff4761e381eab"
  },
  {
    "url": "bigFactory/index.html",
    "revision": "1e1f745528ccb6837be9620a25647469"
  },
  {
    "url": "css/css3.html",
    "revision": "69e96e34f67a8804f9991e3b5d4c5b9c"
  },
  {
    "url": "css/cssBase1.html",
    "revision": "6bca9541cc8a3fc4d8122b069b4d0848"
  },
  {
    "url": "css/cssBase2.html",
    "revision": "f820da257fda975bd8a355688430e0a4"
  },
  {
    "url": "home.html",
    "revision": "335b1aabcb6906f2cd40f0cc790fc42f"
  },
  {
    "url": "html/h5.html",
    "revision": "5ec936faa0c9b622bda83121e858f6e7"
  },
  {
    "url": "html/htmlBase1.html",
    "revision": "ffb3f4b79c9a84d4b41966c23395079c"
  },
  {
    "url": "index.html",
    "revision": "ab0108de52c22ea0e13cb78b62079b2f"
  },
  {
    "url": "js/base1.html",
    "revision": "fe50d5c2d35be3b389d4d7fd50f6f1a7"
  },
  {
    "url": "js/base2.html",
    "revision": "1dac04b641e2bbc5a6ab178653aac7ad"
  },
  {
    "url": "js/jq.html",
    "revision": "697c3ba5323292cd3cff7af543504050"
  },
  {
    "url": "js/middle.html",
    "revision": "88699ccfc70f70b60e561ee7d685cbfc"
  },
  {
    "url": "js/ms1.html",
    "revision": "ed970e0ef104b92120dfce03b3481715"
  },
  {
    "url": "js/ms2.html",
    "revision": "d811a8d4f511c816a3397efa50f71b46"
  },
  {
    "url": "js/ms20211229.html",
    "revision": "639a874d261df414f91b1444c16508cb"
  },
  {
    "url": "js/ms20211230.html",
    "revision": "8ee0a398b6077532079c762fd0a7811a"
  },
  {
    "url": "js/node.html",
    "revision": "39d09fbdd8e7ef4fef686b6b3809e133"
  },
  {
    "url": "performance/base.html",
    "revision": "e30f956db39fa1cb8a0c4c0176c694be"
  },
  {
    "url": "performance/net.html",
    "revision": "7a42f066e3eacbb492c6d7401accfc6b"
  },
  {
    "url": "selfExamin/index.html",
    "revision": "220d3eb1de1224d934e7a28f9277eca9"
  },
  {
    "url": "selfExamin/infomationRules.html",
    "revision": "2a58fa5b83450d3dd4a8d89cec55078c"
  },
  {
    "url": "selfExamin/informationCon.html",
    "revision": "e16227571db3d3403bdfea44d6407986"
  },
  {
    "url": "selfExamin/resourceCon.html",
    "revision": "c44c600643165f60f4c934614b0c9804"
  },
  {
    "url": "suanf/base.html",
    "revision": "2b3fb7a07019dea844193cff78edca8a"
  },
  {
    "url": "vue/core.html",
    "revision": "704790f9e4a2a5417da4dd46abac6069"
  },
  {
    "url": "vue/vueCode.html",
    "revision": "588adc368e4d5bf3f08f985c7ceb9cc5"
  },
  {
    "url": "wechat/ms1.html",
    "revision": "f806ffd0f0c39b3e0288c8c312995622"
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
