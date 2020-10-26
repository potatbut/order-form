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
    path: '/HouseholdGoods',
    name: 'HouseholdGoods',
    component: () => import('../views/HouseholdGoods.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
