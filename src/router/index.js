import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import Navbar from "@/components/Navbar";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    components: {default: Main, navbar: Navbar}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router