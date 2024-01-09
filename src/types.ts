export interface Contact {
  id: number
  firstName: string
  lastName: string
  telNumber: string
  email: string
}

export interface Event {
  id: number
  name: string
  date: string
  time: string
  location: string
  description: string
  isInvitesSent: boolean
  invitees: Contact[]
}
