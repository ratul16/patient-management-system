<script setup>
import NavigationBar from '~/components/NavigationBar.vue'
import LayoutSidebar from '~/components/Sidebar.vue' // Confirming component name

const links = ref([
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Login', to: '/login' },
])
</script>

<template>
  <div>
    <LayoutSidebar />
    <div class="ml-16 flex-1 flex flex-col min-h-screen">
      <div class="p-2">
        <NavigationBar :links="links" />
      </div>
      <main class="flex-1 p-4 bg-gray-100 dark:bg-gray-700">
        <slot />
      </main>
    </div>
  </div>
</template>

<style lang="css" scoped>
/* Any layout specific styles can go here */
</style>
