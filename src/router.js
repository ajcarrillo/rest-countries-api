import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomeView"
import DetailView from "@/views/DetailView"

Vue.use(VueRouter)

const routes = [
  {
    path: '/rest-countries-api',
    component: HomeView,
    name: 'home'
  },
  {
    path: '/rest-countries-api/:code/details',
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