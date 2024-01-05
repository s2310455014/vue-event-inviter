<script setup lang="ts">
import ButtonLink from '@/components/ButtonLink.vue'
import { onBeforeMount } from 'vue'
import { Contact } from '@/types'
import { useContactsStore } from '@/stores/useContactStore'

const contactStore = useContactsStore()

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
      }
    }
  }
})
</script>

<template>
  <div class="main">
    <div class="header">
      <ButtonLink url="/" label="Events" />
      <ButtonLink url="/contacts" label="Contacts" />
    </div>

    <router-view></router-view>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}
.header {
  background-color: rgb(45, 129, 139);
  width: 100%;
  padding: 1rem;
  display: flex;
  gap: 2rem;
  justify-content: left;
}
</style>
