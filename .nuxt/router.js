import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _02b3c060 = () => interopDefault(import('../node_modules/@nuxtjs/tailwindcss/lib/ui/pages/index.vue' /* webpackChunkName: "" */))
const _2650f940 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _1780ffb3 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _5ecd3ec4 = () => interopDefault(import('../pages/services/index.vue' /* webpackChunkName: "pages/services/index" */))
const _efbc2ff4 = () => interopDefault(import('../pages/services/hosting.vue' /* webpackChunkName: "pages/services/hosting" */))
const _1a5451ae = () => interopDefault(import('../pages/services/web-design-development.vue' /* webpackChunkName: "pages/services/web-design-development" */))
const _0c8f5e25 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0ad8bcdd = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/_tailwind",
    component: _02b3c060,
    name: "_tailwind"
  }, {
    path: "/_tailwind",
    component: _02b3c060,
    name: "_tailwind"
  }, {
    path: "/about",
    component: _2650f940,
    name: "about"
  }, {
    path: "/contact",
    component: _1780ffb3,
    name: "contact"
  }, {
    path: "/services",
    component: _5ecd3ec4,
    name: "services"
  }, {
    path: "/services/hosting",
    component: _efbc2ff4,
    name: "services-hosting"
  }, {
    path: "/services/web-design-development",
    component: _1a5451ae,
    name: "services-web-design-development"
  }, {
    path: "/",
    component: _0c8f5e25,
    name: "index"
  }, {
    path: "/:slug",
    component: _0ad8bcdd,
    name: "slug"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
