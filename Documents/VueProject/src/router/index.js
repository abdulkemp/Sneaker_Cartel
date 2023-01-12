import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/Testimonial',
    name: 'Testimonial',
    component: () => import('../views/TestimonialView.vue')
  },
  {
    path: '/ResumeView',
    name: 'ResumeView',
    component: () => import('../views/ResumeView.vue')
  },
  {
    path: '/ProjectView',
    name: 'ProjectView',
    component: () => import('../views/ProjectView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
