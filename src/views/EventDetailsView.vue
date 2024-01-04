<script setup lang="ts">
import { useContactsStore } from '@/stores/useContactStore'
import { useEventStore } from '@/stores/useEventStore'
import ContactCard from '@/components/ContactCard.vue'
import { ref } from 'vue'
import type { Contact } from '@/types'

const eventsStore = useEventStore()
const event = eventsStore.currentEvent

const contactsStore = useContactsStore()
const contacts = contactsStore.contacts

const handleSendInvites = () => {
  event?.invitees.forEach((invitee) => {
    const invitationText = `Dear ${invitee.firstName} ${invitee.lastName}! You are invited to the event "${event.name}" on ${event.date} at ${event.time}. "${event.description}"`
    const link = `https://api.whatsapp.com/send?phone=${invitee.telNumber}&text=${invitationText}`
    window.open(link, '_blank')
  })
}

const addContact = (contact: Contact) => {
  console.log('addContact')

  event?.invitees.push(contact)
}
</script>

<template>
  <div class="main-container">
    <div class="event-details-container">
      <h1>{{ event?.name }}</h1>
      <div class="details">
        <div class="icon-container">
          <v-icon>mdi-calendar-month</v-icon>
          <h3>{{ event?.date }}</h3>
        </div>
        <div class="icon-container">
          <v-icon>mdi-clock</v-icon>
          <h3>{{ event?.time }}</h3>
        </div>
      </div>

      <div class="contact-description">YOUR INVITEES</div>

      <div class="contact-cards">
        <ContactCard
          v-for="contact in event?.invitees"
          :key="contact.id"
          :contact="contact"
        ></ContactCard>
      </div>

      <div class="send-invitation">
        <v-icon>mdi-send</v-icon>
        <span class="text" @click="handleSendInvites">Send invitation to new invitees</span>
      </div>
    </div>

    <div class="contacts-container">
      <div class="contact-description">CLICK ON A CONTACT TO ADD HIM TO THE EVENT</div>
      <div class="contacts">
        <ContactCard
          v-for="contact in contacts"
          :key="contact.id"
          :contact="contact"
          @add-contact="addContact"
        ></ContactCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 3rem;
  margin: 2rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
}

.event-details-container {
  display: flex;
  flex-direction: column;
  max-width: 45rem;
}

.details {
  margin: 1rem;
}

.icon-container {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 0;
  gap: 0.5rem;
}

.text {
  font-size: 1rem;
  padding: 1rem 0;
}

.contact-cards {
  display: flex;
  gap: 0.3rem;
  padding: 1rem;
  flex-wrap: wrap;
}

.send-invitation {
  display: flex;
  padding-top: 1rem;
  gap: 0.5rem;
  cursor: pointer;
  align-items: center;
}

.contacts-container {
  flex-direction: column;
  display: flex;
  gap: 0.3rem;
  padding: 1rem;
  flex-wrap: wrap;
  max-width: 35rem;
}

.contact-description {
  margin: 0 auto;
  color: rgb(45, 129, 139);
}

.contacts {
  display: flex;
  gap: 0.3rem;
  padding: 1rem;
  flex-wrap: wrap;
}
</style>
