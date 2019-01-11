import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Wallet
      component: () => import('./views/Wallet.vue')
    },
    {
      path: '/apply',
      name: 'apply',
      // component: WalletApply
      component: () => import('./views/WalletApply.vue')
    },
    {
      path: '/finish',
      name: 'finish',
      // component: WalletFinish
      component: () => import('./views/WalletFinish.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('./views/Home.vue')
    // }
  ]
})
