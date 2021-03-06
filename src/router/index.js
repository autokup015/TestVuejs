import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Play from '../views/play.vue'
import History from '../views/History.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Play',
    name: 'Play',
    component: Play
  },
  {
    path: '/History',
    name: 'History',
    component: History
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
