import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomeView"
import DetailView from "@/views/DetailView"
import store from "@/store"
import NetworkIssue from "@/views/NetworkIssue"
import NotFound from '@/views/404'

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
    props: true,
    async beforeEnter(to, from, next) {
      try {
        let country = await store.dispatch('fetchCountry', to.params.code)
        to.params.code = country
        next()
      } catch (e) {
        if (e.response && e.response.status == 404) {
          next({name: 'not-found'})
        } else {
          next({name: 'network-issue'})
        }
      }
    }
  },
  {
    path: 'network-issue',
    name: 'network-issue',
    component: NetworkIssue
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
