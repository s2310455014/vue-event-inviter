<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import type { Event } from '@/types'

const emits = defineEmits(['createEvent'])

const eventName = ref('')
const eventDate = ref('')
const eventTime = ref('')
const eventDescription = ref('')

const createEvent = () => {
  const newEvent: Event = {
    id: Math.random(),
    name: eventName.value,
    date: eventDate.value,
    time: eventTime.value,
    description: eventDescription.value,
    invitees: [],
    location: '',
    isInvitesSent: false
  }

  emits('createEvent', newEvent)
  resetForm()
}

const resetForm = () => {
  eventName.value = ''
  eventDate.value = ''
  eventTime.value = ''
  eventDescription.value = ''
}
</script>

<template>
  <v-form @submit.prevent="createEvent">
    <v-text-field v-model="eventName" label="Event Name" required></v-text-field>
    <v-text-field v-model="eventDate" label="Event Date" type="date" required></v-text-field>
    <v-text-field v-model="eventTime" label="Event Time" type="time" required></v-text-field>
    <v-text-field v-model="eventDescription" label="Event Description" multi-line></v-text-field>

    <v-btn type="submit">Create Event</v-btn>
  </v-form>
</template>
