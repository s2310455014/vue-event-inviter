<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import { useContactsStore } from '@/stores/useContactStore'
import ContactCard from '@/components/ContactCard.vue'
import type { Contact } from '@/types'

const contactStore = useContactsStore()
const searchTerm = ref('')

onBeforeMount(async () => {
  if (!contactStore.contacts || !contactStore.contacts.length) {
    const url = 'https://randomuser.me/api/?results=20'
    const res = await fetch(url)
    const { results } = await res.json()

    if (results && results.length > 0) {
      const contactsData: Contact[] = results.map(
        (
          result: { name: { first: string; last: string }; phone: any; email: any },
          index: number
        ) => ({
          id: index + 1,
          firstName: result.name.first,
          lastName: result.name.last,
          name: result.name.first + ' ' + result.name.last,
          telNumber: result.phone,
          email: result.email
        })
      )

      for (const contact of contactsData) {
        contactStore.addContact(contact)
        console.log(contact)
      }
    }
  }
})

const filteredContacts = computed(() => {
  const searchTermLowerCase = searchTerm.value.toLowerCase()

  return Array.isArray(contactStore.contacts)
    ? contactStore.contacts.filter((contact: { name: string }) =>
        contact.name.toLowerCase().includes(searchTermLowerCase)
      )
    : []
})
</script>

<template>
  <div class="searchbar">
    <v-responsive class="mx-auto" width="800">
      <v-text-field v-model="searchTerm" label="Search..." type="input"></v-text-field>
    </v-responsive>
  </div>

  <div class="container">
    <ContactCard
      v-for="contact in filteredContacts"
      :key="contact.id"
      :contact="contact"
    ></ContactCard>
  </div>
</template>

<style>
.container {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.searchbar {
  width: 20rem;
  margin: 1rem;
  padding: 0 1rem;
}
</style>
