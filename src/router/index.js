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
    { path: '/detail', component: Prodetail },
    { path: '/user', component: User }
  ]
})

export default router
