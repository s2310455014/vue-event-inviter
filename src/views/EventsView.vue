<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import CreateEventForm from '@/components/CreateEventForm.vue'
import EventCard from '@/components/EventCard.vue'
import { useEventStore } from '@/stores/useEventStore'
import type { Event } from '@/types'

const eventStore = useEventStore()
const events = ref(eventStore.events)

onMounted(async () => {
  await eventStore.loadExistingEvents()
  events.value = eventStore.events || []
})

const openModal = ref(false)
const filterOn = ref(false)
const searchTerm = ref('')

const addEvent = (newEvent: Event) => {
  openModal.value = false
  searchTerm.value = ' '
  searchTerm.value = ''
  eventStore.addEvent(newEvent)
}

const toggleFilter = () => {
  filterOn.value = !filterOn.value
}

const filteredEvents = computed(() => {
  const searchTermLowerCase = searchTerm.value.toLowerCase()

  return events.value?.filter((event) => {
    const nameMatches = event.name.toLowerCase().includes(searchTermLowerCase)
    const invitationSentMatches = filterOn.value ? !event.isInvitesSent : true
    return nameMatches && invitationSentMatches
  })
})
</script>

<template>
  <h2>Upcoming events</h2>

  <div class="tools">
    <v-btn>
      Create new event

      <v-dialog v-model="openModal" activator="parent" width="auto">
        <v-card class="dialog">
          <CreateEventForm @createEvent="addEvent" />
        </v-card>
      </v-dialog>
    </v-btn>

    <v-btn @click="toggleFilter" data-testid="filter">
      <v-icon left>mdi-filter</v-icon>
      {{ filterOn ? 'Show All Events' : 'Show unsent events' }}
    </v-btn>
  </div>

  <div class="searchbar">
    <v-responsive class="mx-auto" width="800">
      <v-text-field v-model="searchTerm" label="Search..." type="input"></v-text-field>
    </v-responsive>
  </div>

  <div class="container">
    <EventCard v-for="event in filteredEvents" :key="event.id" :event="event"></EventCard>
  </div>
</template>

<style scoped>
h2 {
  padding: 2rem;
}
.container {
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.dialog {
  width: 20rem;
  height: fit-content;
  padding: 1rem;
}

.tools {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding-left: 2rem;
}

.searchbar {
  width: 20rem;
  margin: 1rem;
  padding: 0 1rem;
}
</style>
