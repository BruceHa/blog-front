import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home.vue')
const Aritcle = () => import('@/views/article.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/article',
    name: 'article',
    component: Aritcle
  }
]

const router = new VueRouter({
  routes
})

export default router
