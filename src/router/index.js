import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/BarGoods',
    name: 'BarGoods',
    component: () => import('../views/BarGoods.vue')
  },
  {
    path: '/HouseholdGoods',
    name: 'HouseholdGoods',
    component: () => import('../views/HouseholdGoods.vue')
  },
  {
    path: '/Stationery',
    name: 'Stationery',
    component: () => import('../views/Stationery.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
