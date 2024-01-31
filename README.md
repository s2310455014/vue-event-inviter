# Event Inviter

## Team members

Tobias Kothbauer and Elena Ebetshuber

## URL to live application

https://s2310455014.github.io/vue-event-inviter/

## Purpose of the app

The main goal of the app is to facilitate the effortless creation of events and the invitation of contacts to these events. The app offers on the one hand an overview about all upcoming events and on the other hand an overview about all your contacts. Each event is accompanied by a detailed view containing essential information. Users can efficiently handle the invitee list for each event, adding or removing individuals as needed. Upon event completion, invitations can be sent via WhatsApp to the designated invitees.

## Motivation for building it

This application was developed with the intention of offering a streamlined overview of upcoming events and their respective invitees. It proves particularly beneficial for managers and other organizational individuals who frequently plan numerous events and appointments. The tool simplifies the process, ensuring that users can maintain a clear overview and consolidate all their events in one centralized location.

## Local dev setup & configuration

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Build Project

```sh
npm run build
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
npm run test:e2e
```

## Brief User Guide

This user guide aims to provide a user-friendly experience, allowing you to navigate seamlessly through event creation, management, and invitation processes.

### Navigation:

- Switching Between Overviews: Navigate effortlessly between the event overview and the contacts overview by selecting the corresponding button located in the top left corner.

### Events Overview:

- Creating a New Event: To initiate a new event, access the events overview and click on the "Create New Event" button. Provide essential details such as the event name, date, and time. Optionally, include a description. After event creation, you can navigate to the event details page to manage invitees by clicking the "Show Details" button.
- Filtering and Searching: Easily filter out sent events or search for specific events using the available options.

### Event Details:

- Managing Invitees: Access the details of a created event to efficiently handle invitee management.
  - Add invitees by dragging the desired contact card to the "Your invitees" area.
  - Remove invitees by clicking on the bin icon.
- Sending Invitations: Once invitees are confirmed, initiate the invitation process by clicking on the "Send invitation to new invitees" button. Invitees will receive notifications via WhatsApp, ensuring effective communication.

### Contacts Overview:

- Overview about your contacts: This view offers you a comprehensive view about all your contacts. You can also search for contacts by entering the desired search term.
