<script setup lang="ts">
import type { Contact } from '@/types'

defineProps<{
  contact: Contact
}>()
</script>

<template>
  <v-sheet class="contactCard" :elevation="4" @click="$emit('add-contact', contact)">
    <p>{{ contact.firstName }} {{ contact.lastName }}</p>
    <p>{{ contact.telNumber }}</p>
  </v-sheet>
</template>

<style scoped>
.contactCard {
  height: 5rem;
  width: 10rem;
  padding: 1em 1em;
  border-radius: 10px;
}
</style>
