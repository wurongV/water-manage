import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/Login.vue')
const Home = () => import('../views/Home.vue')
const Welcome = () => import('../views/Welcome.vue')
const User = () => import('../views/user/userManage.vue')
const Area = () => import('../views/area/areaManage.vue')
const Water = () => import('../views/water/waterManage.vue')
const Index = () => import('../views/index/Index.vue')

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/login'},
  {path: '/login', component: Login},
  {path: '/home', component: Home,
    redirect : '/welcome',
    children: [
      {path: '/welcome', component: Welcome },
      {path: '/user', component: User},
      {path: '/area', component: Area},
      {path: '/water', component: Water}
    ]
  },
  {path: '/index', component: Index}
]

const router = new VueRouter({
  routes
})

export default router
