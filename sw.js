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
    "url": "Donald_Trump.jpg",
    "revision": "c5a908d70ecb4f33c69dede48bc48515"
  },
  {
    "url": "Donald_Trump.svg",
    "revision": "56b519050bc935eac1d9e891580fae5c"
  },
  {
    "url": "index_1.html",
    "revision": "4975c26f5fbb0099ba34eb6e69a78acb"
  },
  {
    "url": "index.html",
    "revision": "0172bb40603e346a7bcea077c1d7ff23"
  },
  {
    "url": "st_cv.css",
    "revision": "3791341ce7e3acf5c1b9b89b6906a20f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
