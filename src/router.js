import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomeView"
import DetailView from "@/views/DetailView"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home'
  },
  {
    path: '/:code/details',
    component: DetailView,
    name: 'details',
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router