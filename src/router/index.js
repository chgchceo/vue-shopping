import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/views/layout'
import Home from '@/views/layout/home'
import Categoty from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'
import store from '@/store'

const Login = () => import('@/views/login')
const Prodetail = () => import('@/views/prodetail')
const Search = () => import('@/views/search')
const Pay = () => import('@/views/pay')
const Order = () => import('@/views/order')
const SearchList = () => import('@/views/search/list')
const Address = () => import('@/views/address')
const CreateAddress = () => import('@/views/address/createAddress')
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
    { path: '/pay', component: Pay },
    { path: '/order', component: Order },
    { path: '/address', component: Address },
    { path: '/addAddress', component: CreateAddress },
    { path: '/searchlist', component: SearchList }
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
