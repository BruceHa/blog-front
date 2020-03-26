import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home.vue')
const Index = () => import('@/views/index.vue')
const Aritcle = () => import('@/views/article.vue')
const Project = () => import('@/views/project.vue')
const Note = () => import('@/views/note.vue')
const Course = () => import('@/views/course.vue')
const LeaveMsg = () => import('@/views/leave-msg.vue')
const Summary = () => import('@/views/summary.vue')
const ForgetPassword = () => import('@/views/forget-password.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '/article',
        name: 'article',
        component: Aritcle
      },
      {
        path: '/project',
        name: 'project',
        component: Project
      },
      {
        path: '/note',
        name: 'note',
        component: Note
      },
      {
        path: '/course',
        name: 'course',
        component: Course
      },
      {
        path: '/leave-msg',
        name: 'leave-msg',
        component: LeaveMsg
      },
      {
        path: '/summary',
        name: 'summary',
        component: Summary
      }
    ]
  },
  {
    path: '/forget-password',
    component: ForgetPassword
  }
]

const router = new VueRouter({
  routes
})

export default router
