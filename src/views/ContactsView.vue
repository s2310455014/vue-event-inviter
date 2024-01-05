<script setup lang="ts">
import { computed, ref } from 'vue'
import { useContactsStore } from '@/stores/useContactStore'
import ContactCard from '@/components/ContactCard.vue'

const contactStore = useContactsStore()
const searchTerm = ref('')

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
