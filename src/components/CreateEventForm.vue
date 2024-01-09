<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import type { Event } from '@/types'

const emits = defineEmits(['createEvent'])

const eventName = ref('')
const eventDate = ref('')
const eventTime = ref('')
const eventDescription = ref('')

let allFieldsFilled = ref(true)

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

  if (!newEvent.name || !newEvent.date || !newEvent.time) {
    allFieldsFilled.value = false
  } else {
    allFieldsFilled.value = true
  }

  if (allFieldsFilled.value) {
    emits('createEvent', newEvent)
    resetForm()
  }
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
    <v-text-field v-model="eventName" label="Event Name*"></v-text-field>
    <v-text-field v-model="eventDate" label="Event Date*" type="date"></v-text-field>
    <v-text-field v-model="eventTime" label="Event Time*" type="time"></v-text-field>
    <v-text-field v-model="eventDescription" label="Event Description" multi-line></v-text-field>

    <v-btn type="submit">Create Event</v-btn>
  </v-form>

  <div class="validation">
    <p v-if="!allFieldsFilled">Fields with * are required.</p>
  </div>
</template>

<style scoped>
.validation {
  color: rgb(124, 124, 124);
  margin-top: 8px;
}
</style>
