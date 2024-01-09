<script setup lang="ts">
import type { Contact } from '@/types'

defineProps<{
  contact: Contact
}>()
</script>

<template>
  <v-sheet class="contactCard" :elevation="4" @click="$emit('add-contact', contact)">
    <p class="card-text">{{ contact.firstName }} {{ contact.lastName }}</p>
    <p class="card-text">{{ contact.telNumber }}</p>
  </v-sheet>
</template>

<style scoped>
.contactCard {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 6rem;
  width: 10rem;
  padding: 1em 1em;
  border-radius: 10px;
  justify-content: center;
}

.card-text {
  text-align: center;
}
</style>
