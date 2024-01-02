<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useContactsStore } from '@/stores/useContactStore';

const contacts = useContactsStore();

onBeforeMount(async () => {
  if (!contacts.contactDetails || !contacts.contactDetails.length) {
    const url = 'https://randomuser.me/api/?results=5';
    const res = await fetch(url);
    const { results } = await res.json();

    if (results && results.length > 0) {
      const contactsData = results.map((result, index) => ({
        id: index + 1,
        firstName: result.name.first,
        lastName: result.name.last,
        telNumber: result.phone,
        email: result.email,
      }));

      contacts.setContactDetails(contactsData);
    }
  }
});
</script>

<template>
  <div class="about">
    <h1>Contacts Page</h1>
    <div v-for="contact in contacts.contactDetails" :key="contact.id">
      <p>{{ contact.firstName }} {{ contact.lastName }}</p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
