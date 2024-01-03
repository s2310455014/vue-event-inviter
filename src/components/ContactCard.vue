<script setup lang="ts">
import type { Contact } from '@/types'

defineProps<{
  contact: Contact
}>()
</script>

<template>
    <v-sheet class="contactCard" :elevation="4">
      <p>{{ contact.firstName }} {{ contact.lastName }}</p>
      <p>{{ contact.telNumber }}</p>
    </v-sheet>
</template>

<style scoped>

.contactCard {
  height: fit-content;
  width: fit-content;
  padding: 1.5em 3em;
  border-radius: 10px;
}

</style>
