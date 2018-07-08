importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "smart-feira",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.c6521e71e42234a513c5.js",
    "revision": "9d0127da1b379b1cb49c25026a999a3e"
  },
  {
    "url": "/_nuxt/app.cda075a5c08148032ba159ae81e27892.css",
    "revision": "cda075a5c08148032ba159ae81e27892"
  },
  {
    "url": "/_nuxt/layouts/default.b7e2029cebbcb7156cfb.js",
    "revision": "a4f59eedad4dec62c7a3f9f1b8f757b9"
  },
  {
    "url": "/_nuxt/manifest.6c97eeecedee2e5ce0c7.js",
    "revision": "358c445d5c621fd54b914b170dca5a52"
  },
  {
    "url": "/_nuxt/pages/index.c387d63211244abf286b.js",
    "revision": "eb372fe38db2e6819d8e7a1400a9080f"
  },
  {
    "url": "/_nuxt/pages/loja.0ae4c7d7bdc85bb92169.js",
    "revision": "3ef6119876f83aeab7980533b305ce90"
  },
  {
    "url": "/_nuxt/vendor.5433b8ee42e950118584.js",
    "revision": "f0106713fbf36d6742b497e11861b8f1"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

