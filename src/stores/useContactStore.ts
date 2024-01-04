import { defineStore } from 'pinia';

export interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    name: string
    telNumber: string;
    email: string;
}

export interface ContactsState {
    contactDetails: Contact | null;
}

export const useContactsStore = defineStore('contacts', {
    state: (): ContactsState => ({
        contactDetails: null,
    }),
    actions: {
        setContactDetails(contactDetails: Contact | null) {
            this.contactDetails = contactDetails;
        },
    },
    getters: {
        getContactDetails(): Contact | null {
            return this.contactDetails;
        },
    },
});

// Usage in a component:
// const contacts = useContactsStore();
// const contactDetails = contacts.getContactDetails();
