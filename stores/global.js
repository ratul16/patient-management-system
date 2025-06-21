// stores/sidebar.js
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    isExpanded: true,
    user: {
      id: '550e8400-e29b-41d4-a716-446655440000',
      avatar: 'https://source.unsplash.com/3prIF_-eDM0/',
      info: {
        first_name: 'John',
        last_name: 'Doe',
        role: 'admin',
        email: 'john.doe@example.com',
        password: '',
        phone: '+1234567890',
        about_me: 'I love outdoor activities.',
        address: '123 Main Street',
        city: 'New York',
        country: 'USA',
        postcode: 'NK2 3YT',
      },
      health: {
        dob: '1995-05-12',
        height: 175.5,
        weight: 70.2,
        gender: 'Male',
        blood_group: 'A+',
      },
      created_at: '2023-09-25 09:15:00',
      updated_at: '2023-09-25 09:15:00',
    },
  }),
  actions: {
    toggleSidebar() {
      this.isExpanded = !this.isExpanded
    },
    expandSidebar() {
      this.isExpanded = true
    },
    collapseSidebar() {
      this.isExpanded = false
    },
  },

  persist: true,
})
