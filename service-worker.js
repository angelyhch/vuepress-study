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
    "revision": "4a9ace6cd09c9a651d1afd6c07191f54"
  },
  {
    "url": "about/about1.html",
    "revision": "92b95ce80f2744794229fe5059caa0e9"
  },
  {
    "url": "about/about2.html",
    "revision": "b18d3d602f29f006aeaa0f630e59813c"
  },
  {
    "url": "about/about3.html",
    "revision": "e20ff747b8e35f2731a62ee59aa39bbb"
  },
  {
    "url": "about/index.html",
    "revision": "7dcff8290c96572636fa0a3fa429f988"
  },
  {
    "url": "assets/css/0.styles.9fee17a2.css",
    "revision": "4277e02e8ccaa8b250268464469cb9ed"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Snipaste_2022-10-21_06-30-08.45b61901.png",
    "revision": "45b619014b751c452df5241b03f91d98"
  },
  {
    "url": "assets/js/10.0ded0462.js",
    "revision": "6ce9e2259ae63d63de3f13af1e8733a4"
  },
  {
    "url": "assets/js/11.7d285981.js",
    "revision": "31391cec46ec90a397806ac25640ea21"
  },
  {
    "url": "assets/js/12.7747a8e8.js",
    "revision": "6b2f92b1ed814f8e28c495cc390362a1"
  },
  {
    "url": "assets/js/13.9d53813c.js",
    "revision": "3b9673e14b1c3e6b046d30fc2993b687"
  },
  {
    "url": "assets/js/14.33208092.js",
    "revision": "4e6aec6341df84d202f89ec8efdb6d46"
  },
  {
    "url": "assets/js/15.a53f3cdd.js",
    "revision": "b24cb5a42606485c413dc7b3e5cb59d1"
  },
  {
    "url": "assets/js/16.6a2d8862.js",
    "revision": "734ce2c4ebdf50815e817bab9ffee59a"
  },
  {
    "url": "assets/js/17.46e37bc5.js",
    "revision": "82bd191136f59fb9088a2dc8684407b5"
  },
  {
    "url": "assets/js/18.b3453ebe.js",
    "revision": "9f6d000e56ff9b152a4d3c142b557107"
  },
  {
    "url": "assets/js/2.54a4821a.js",
    "revision": "62880ef72f419543c471641e641889f6"
  },
  {
    "url": "assets/js/3.ada582e7.js",
    "revision": "2d5aa82035d9d42fc741418271294f99"
  },
  {
    "url": "assets/js/4.aac60c44.js",
    "revision": "8470a750e3e6a2d2f15c28f1d8a97798"
  },
  {
    "url": "assets/js/5.abf5e738.js",
    "revision": "942408f52b86d95207e41416baed13e5"
  },
  {
    "url": "assets/js/6.da1f7a7c.js",
    "revision": "b8c9c2c9168fd5950f1d39be457f3c9c"
  },
  {
    "url": "assets/js/7.71dbfcf3.js",
    "revision": "8e8b582a03a21c636a57d4565d15d6e1"
  },
  {
    "url": "assets/js/8.eb190d5e.js",
    "revision": "161f4bfee4083257ca14bec576f74e75"
  },
  {
    "url": "assets/js/9.1dda9418.js",
    "revision": "bb80c8f06151abb6d6c3fbd14d856620"
  },
  {
    "url": "assets/js/app.1e47c929.js",
    "revision": "f8ca843e8f284b11e1b5e1d3fef14620"
  },
  {
    "url": "guide/index.html",
    "revision": "3b9eb976ded51fad34a8c2cdebfe7ff7"
  },
  {
    "url": "index.html",
    "revision": "146600620da87781bf44ce8f6dc0becb"
  },
  {
    "url": "packComP/index.html",
    "revision": "bf33e2d003fa477ea910a3f88f85fb96"
  },
  {
    "url": "vssue/index.html",
    "revision": "30529f85f97f69d8b7628ffa17825e88"
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
