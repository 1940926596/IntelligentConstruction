import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../formation/mainPage/homePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/content',
    name:'content',
    component: ()=>import('../components/content1.vue')
  },
  {
    path:'/contents',
    name:'contents',
    component: ()=>import('../components/contents.vue')
  },
  {
    path:'/industryMap',
    name:'industryMap',
    component: ()=>import('../components/industryMap.vue')
  },
  {
    path:'/industryMaps',
    name:'industryMaps',
    component: ()=>import('../components/industryMaps.vue')
  },
  {
    path:'/login',
    name:'login',
    component: ()=>import('../formation/login/userLogin.vue')
  },
  {
    path:'/chart',
    name:'chart',
    component: ()=>import('../components/echart1.vue')
  },
  {
    path:'/score',
    name:'score',
    component: ()=>import('../components/score.vue')
  },
  {
    path:'/test',
    name:'test',
    component: ()=>import('../components/test.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
