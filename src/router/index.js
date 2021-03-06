import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Learn from '../views/Learn.vue'
import Developers from '../views/Developers.vue'
import Enterprise from '../views/Enterprise.vue'
import Community from '../views/Community.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/learn',
    name: 'Learn',
    component: Learn
  },
  {
    path: '/developers',
    name: 'Developers',
    component: Developers
  },
  {
    path: '/enterprise',
    name: 'Enterprise',
    component: Enterprise
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router