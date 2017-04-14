import Vue from 'vue'
import Vonic from 'vonic'
import VueRouter from 'vue-router'

// Page Components
import Tabs from './components/tabs.vue'
import TabbarHome from './components/home.vue'
import TabbarDiscount from './components/cart.vue'

// Routes
const routes = [
  { path: '/tabs',
    component: Tabs,
    children: [
      { path: 'home', component: TabbarHome },
      { path: 'discount', component: TabbarDiscount }
    ]
  },
  {path: '*', redirect: '/tabs/home'},
]

// const beforeEach = (toRoute, fromRoute, next) => {
//   const to = toRoute.path
//   const from = fromRoute.path
//   const scrollTop = Vonic.app.pageContentScrollTop()
//
//   let h = sess.get(to)
//   if (h && h.history) {
//     Vonic.app.nextDirection('back')
//     h.history = false
//     sess.set(to, h)
//   } else {
//     sess.set(from || '/', {
//       history: true,
//       scrollTop: scrollTop
//     })
//     Vonic.app.nextDirection('forward')
//   }
//
//   const tabbarRoutes = [
//     '/advanced/tabbar/home',
//     '/advanced/tabbar/discount',
//     '/advanced/tabbar/cart',
//     '/advanced/tabbar/user'
//   ]
//
//   if (from && tabbarRoutes.indexOf(from) > -1) {
//     sess.set(from, {
//       history: false,
//       scrollTop: scrollTop
//     })
//   }
//
//   // 某些页面定制 page transition direction
//   if (
//     (from == '/' && to == '/home') ||
//     (from == '/home' && to == '/advanced/tabbar/home') ||
//     (from == '/advanced/tabbar/user' && to == '/pageFromTabbar')
//   ) {
//     Vonic.app.nextDirection('forward')
//   }
//
//   if (
//     (to == '/' && from == '/home') ||
//     (to == '/home' && from == '/advanced/tabbar/home') ||
//     (to == '/advanced/tabbar/user' && from == '/pageFromTabbar')
//   ) {
//     Vonic.app.nextDirection('back')
//   }
//
//   next()
// }
//
// const afterEach = (toRoute, fromRoute) => {
//   const to = toRoute.path
//   const from = fromRoute.path
//   // [Custom Business] Never use history scrollTop when '/' => '/home'
//   if (from == '/' && to == '/home') return
//
//   const h = sess.get(to)
//   if (h && h.scrollTop) {
//     Vue.nextTick(() => {
//       Vonic.app.pageContentScrollTop(h.scrollTop)
//     })
//   }
// }

Vue.use(Vonic.app, {
  routes: routes
})
