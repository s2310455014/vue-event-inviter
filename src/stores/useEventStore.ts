import { defineStore } from 'pinia'
import type { Event } from '@/types'
import { initializeEvents } from '@/services/EventsService'

export interface EventsState {
  events: Event[]
  currentEvent: Event | null
}

export const useEventStore = defineStore('events', {
  state: (): EventsState => ({
    events: [],
    currentEvent: null
  }),
  actions: {
    setCurrentEvent(event: Event | null) {
      this.currentEvent = event
    },
    loadExistingEvents() {
      this.events = initializeEvents()
    },
    addEvent(event: Event) {
      if (this.events) {
        this.events.push(event)
      }
    },
    removeEvent(event: Event) {
      if (this.events) {
        this.events = this.events.filter((e) => e.id !== event.id)
      }
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
