import { defineStore } from 'pinia'
import type { Contact } from '@/types'

export interface ContactsState {
  contacts: Contact[]
  currentContact: Contact | null
}

export const useContactsStore = defineStore('contacts', {
  state: (): ContactsState => ({
    contacts: [],
    currentContact: null
  }),
  actions: {
    addContact(contact: Contact) {
      this.contacts.push(contact)
    },
    setCurrentContact(contact: Contact | null) {
      this.currentContact = contact
    }
  }
})
