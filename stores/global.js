// stores/sidebar.js
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    isExpanded: true,
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
