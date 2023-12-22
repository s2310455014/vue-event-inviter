<script setup lang="ts">
import type { Event } from '@/types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <div class="d-flex align-center flex-column padding">
    <v-card
      class="card"
      :title="event.name"
      :subtitle="event.date + ', ' + event.time"
      :text="event.description"
    >
      <div class="spacer">Invited: {{ event.invitees.length }}</div>
      <v-card-actions>
        <v-btn> Details </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
.card {
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
</style>
