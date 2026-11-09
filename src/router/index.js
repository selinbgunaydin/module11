import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import RandomQuotesView from '../views/RandomQuotesView.vue'
import ContactView from '../views/ContactView.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/quotes',
    name: 'quotes',
    component: RandomQuotesView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router