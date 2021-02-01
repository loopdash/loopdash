import Vue from 'vue'

const globalComponents = {
  CallToAction: () => import('../../components/global/CallToAction.vue' /* webpackChunkName: "components/global/CallToAction" */).then(c => c.default || c),
  Footer: () => import('../../components/global/Footer.vue' /* webpackChunkName: "components/global/Footer" */).then(c => c.default || c),
  GlobalNav: () => import('../../components/global/GlobalNav.vue' /* webpackChunkName: "components/global/GlobalNav" */).then(c => c.default || c),
  Hero: () => import('../../components/global/Hero.vue' /* webpackChunkName: "components/global/Hero" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
