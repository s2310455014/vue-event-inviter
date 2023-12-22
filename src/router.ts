import EventsViewVue from './views/EventsView.vue'
import ContactsViewVue from './views/ContactsView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: EventsViewVue },
  { path: '/contacts', component: ContactsViewVue }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
