<script setup lang="ts">
import { useEventStore } from '@/stores/useEventStore'
import type { Event } from '@/types'

const eventStore = useEventStore()

defineProps<{
  event: Event
}>()

const setCurrentEvent = (event: Event) => {
  eventStore.setCurrentEvent(event)
}

const removeEvent = (event: Event) => {
  eventStore.events.splice(eventStore.events.indexOf(event), 1)
}
</script>

<template>
  <div class="d-flex align-center flex-column padding" :data-testid="event.id">
    <v-card
      class="card"
      :id="event.id"
      :title="event.name"
      :subtitle="event.date + ', ' + event.time"
      :text="event.description"
    >
      <div class="spacer">Invited: {{ event.invitees.length }}</div>

      <div class="delete-icon" @click="removeEvent(event)">
        <v-icon>mdi-delete</v-icon>
      </div>
      <v-card-actions>
        <v-btn>
          <router-link @click="setCurrentEvent(event)" class="link" :to="'/event/' + event.id"
            >Details anzeigen</router-link
          >
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  width: 20rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-actions {
  display: flex;
  justify-content: space-between;
}

.spacer {
  min-height: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;
  flex-grow: 1;
}

.padding {
  padding: 1rem;
}

.link {
  text-decoration: none;
  color: inherit;
}

.delete-icon {
  position: absolute;
  cursor: pointer;
  z-index: 1;
  top: 0.2rem;
  left: 18.5rem;
  color: grey;
}
</style>
