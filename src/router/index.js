import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Cachorros from '../views/Cachorros.vue'
import Passaros from '../views/Passaros.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cachorros',
    name: 'Cachorros',
    component: Cachorros
  },
  {
    path: '/passaros',
    name: 'Passaros',
    component: Passaros
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
