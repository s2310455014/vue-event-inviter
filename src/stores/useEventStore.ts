import { defineStore } from 'pinia'
import type { Event } from '@/types'

export interface EventsState {
  events: Event[] | null
  currentEvent: Event | null
}

export const useEventStore = defineStore('events', {
  state: (): EventsState => ({
    events: null,
    currentEvent: null
  }),
  actions: {
    setCurrentEvent(event: Event | null) {
      this.currentEvent = event
    }
  },
  getters: {
    getCurrentEvent(): Event | null {
      return this.currentEvent
    }
  }
})

// Usage in a component:
// const contacts = useContactsStore();
// const contactDetails = contacts.getContactDetails();
