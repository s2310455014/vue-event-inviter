import { defineStore } from 'pinia'
import type { Contact } from '@/types'

export interface ContactsState {
  contacts: Contact[]
}

export const useContactsStore = defineStore('contacts', {
  state: (): ContactsState => ({
    contacts: []
  }),
  actions: {
    addContact(contact: Contact) {
      this.contacts.push(contact)
    }
  }
})
