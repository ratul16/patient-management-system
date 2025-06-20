<script setup>
import NavigationBar from '~/components/NavigationBar.vue'
import LayoutSidebar from '~/components/Sidebar.vue' // Assuming you renamed LayoutSidebar to Sidebar
import { useGlobalStore } from '~/stores/global' // Import your global store

const globalStore = useGlobalStore() // Initialize the store
const isSidebarExpanded = computed(() => globalStore.isExpanded) // Get the state

const links = ref([
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Login', to: '/login' },
])
</script>

<template>
  <div class="flex">
    <LayoutSidebar />

    <div
      :class="{
        'ml-64': isSidebarExpanded,
        'ml-20': !isSidebarExpanded,
      }"
      class="flex-1 flex flex-col min-h-screen transition-all duration-300 ease-in-out"
      style="will-change: margin"
    >
      <main class="flex-1 p-4 bg-gray-100 dark:bg-gray-900">
        <NavigationBar :links="links" />
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="css" scoped>
/* Any layout specific styles can go here */
</style>
