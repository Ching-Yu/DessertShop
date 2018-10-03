import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dessert from './views/Dessert.vue'
import Login from './views/Login.vue'
import Cart from './views/Cart.vue'
import Checkout from './views/Checkout.vue'
import Payment from './views/Payment.vue'
import Invoice from './views/Invoice.vue'
import Success from './views/Success.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dessert',
      name: 'dessert',
      component: Dessert
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/invoice',
      name: 'invoice',
      component: Invoice
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
