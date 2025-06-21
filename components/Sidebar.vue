<script setup>
// No need to import sidebar store if there's no dynamic state or toggle
// import { useGlobalStore } from '~/stores/global'

// If you have a prop for links, you can define it, or hardcode them here.
// const sidebarStore = useGlobalStore() // No longer needed if not dynamic
// const isExpanded = computed(() => sidebarStore.isExpanded) // No longer needed

const sidebarLinks = [
  { label: 'Dashboard', icon: 'i-heroicons-squares-2x2', to: '/' },
  { label: 'Appointments', icon: 'i-heroicons-calendar', to: '/appointments' },
  { label: 'Reports', icon: 'i-heroicons-document-text', to: '/reports' },
  { label: 'Medications', icon: 'i-heroicons-beaker', to: '/medications' },
  { label: 'Patients', icon: 'i-heroicons-user-group', to: '/patients' },
  { label: 'Profile', icon: 'i-heroicons-user', to: '/profile' },
]
</script>

<template>
  <aside
    class="w-20 bg-white h-screen fixed top-0 left-0 shadow-lg flex flex-col pt-4 overflow-hidden"
  >
    <div class="px-4 pb-8 flex items-center justify-center">
      <img src="/logo.png" alt="Hospital" class="h-10 w-10" />
    </div>

    <nav class="flex-1 overflow-y-auto">
      <ul>
        <li v-for="link in sidebarLinks" :key="link.label">
          <NuxtLink
            :to="link.to"
            class="flex items-center justify-center py-3 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            :class="{ 'bg-blue-50 text-blue-600': $route.path === link.to }"
          >
            <UIcon :name="link.icon" :class="[, 'w-6 h-6 flex-shrink-0']" />
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="p-4 border-t border-gray-200 flex justify-center">
      <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
        <UIcon name="lucide:chevron-right" class="size-6 text-gray-600" />
      </button>
    </div>
  </aside>
</template>

<style scoped></style>
