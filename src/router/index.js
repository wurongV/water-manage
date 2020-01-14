import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('../views/index/Index.vue')

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/index'},
  {path: '/index', component: Index}
]

const router = new VueRouter({
  routes
})

export default router
