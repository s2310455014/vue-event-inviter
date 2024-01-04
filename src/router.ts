import EventsViewVue from './views/EventsView.vue'
import ContactsViewVue from './views/ContactsView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import EventDetailsViewVue from './views/EventDetailsView.vue'

const routes = [
  { path: '/', component: EventsViewVue },
  { path: '/contacts', component: ContactsViewVue },
  { path: '/event/:id', component: EventDetailsViewVue }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
