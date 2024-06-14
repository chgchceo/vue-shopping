import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Prodetail from '@/views/prodetail'
import Search from '@/views/search'
import Layout from '@/views/layout'
import Home from '@/views/layout/home'
import Categoty from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'
import Pay from '@/views/pay'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      redirect: '/home',
      path: '/',
      component: Layout,
      children: [
        { path: '/home', component: Home },
        { path: '/category', component: Categoty },
        { path: '/cart', component: Cart },
        { path: '/user', component: User }
      ]
    },
    { path: '/search', component: Search },
    { path: '/detail/:id', component: Prodetail },
    { path: '/user', component: User },
    { path: '/pay', component: Pay }
  ]
})

// 需要进行token登录的路由，进行拦截处理
const authorRoutes = ['/pay']
router.beforeEach((to, from, next) => {
  if (authorRoutes.includes(to.path)) {
    // 判断是否登录
    const token = store.getters.token
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
