/*
 * @Author       : 蔡诗涵
 * @Date         : 2023-07-06 10:31:52
 * @LastEditTime : 2023-08-30 15:53:36
 * @Description  :
 *
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
