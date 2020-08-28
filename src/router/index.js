import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'HelloWorld',
  redirect: '/home'
}, {
  path: '/home',
  name: 'home',
  component: () => import( /* webpackChunkName: "HelloWorld"   */ '../views/Home.vue')
}, {
  path: '/move',
  name: 'About',
  component: () => import( /* webpackChunkName: "About"   */ '../views/About.vue')
}, {
  path: '/animation',
  name: 'Animation',
  component: () => import( /* webpackChunkName: "Animation"   */ '../views/Animation.vue')
}, {
  path: '/infomation',
  name: 'Infomation',
  component: () => import( /* webpackChunkName: "Information"   */ '../views/Information.vue')
}, {
  path: '/tv',
  name: 'Tv',
  component: () => import( /* webpackChunkName: "Tv"   */ '../views/Tv.vue')
}, {
  path: '/welfare',
  name: 'Welfare',
  component: () => import( /* webpackChunkName: "Welfare"   */ '../views/Welfare.vue')
}, {
  path: '/varuety',
  name: 'Varuety',
  component: () => import( /* webpackChunkName: "Variety"   */ '../views/Variety.vue')
}, {
  path: '/detill/:id',
  name: 'detill',
  component: () => import( /* webpackChunkName: "detlll"   */ '../views/Content.vue')
}, {
  path: '/type',
  name: 'type',
  component: () => import( /* webpackChunkName: "type"   */ '../views/Type.vue')
}, {
  path: '*',
  name: 'NotFound',
  component: () => import( /* webpackChunkName: "NotFound"   */ '../views/NotFound.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router