import { createRouter, createWebHashHistory } from 'vue-router'
import ExploreCollege from '../views/ExploreCollege.vue'

const routes = [
  {
    path: '/',
    name: 'ExploreCollege',
    component: ExploreCollege
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
