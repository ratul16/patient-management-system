<script setup>
const store = useGlobalStore()

const isExpanded = computed(() => store.isExpanded)

function toggleSidebar() {
  store.toggleSidebar()
}

// Example links for your sidebar. You can make this dynamic if needed.
const sidebarLinks = [
  { label: 'Dashboard', icon: 'i-heroicons-squares-2x2', to: '/dashboard' }, // Example icon, replace with your actual icon component or class
  { label: 'Appointments', icon: 'i-heroicons-calendar', to: '/appointments' },
  { label: 'Reports', icon: 'i-heroicons-document-text', to: '/reports' },
  { label: 'Medications', icon: 'i-heroicons-beaker', to: '/medications' },
  { label: 'Patients', icon: 'i-heroicons-user-group', to: '/patients' },
  { label: 'Profile', icon: 'i-heroicons-user', to: '/profile' },
]
</script>

<template>
  <aside
    :class="{
      'w-64': isExpanded, // This sets the width
      'w-20': !isExpanded, // This applies the transition to the width property
    }"
    class="bg-white h-screen fixed top-0 left-0 shadow-lg flex flex-col pt-4 overflow-hidden transition-width duration-300 ease-in-out"
  >
    <div
      class="px-4 pb-8 flex items-center"
      :class="{ 'justify-start': isExpanded, 'justify-center': !isExpanded }"
    >
      <img v-if="isExpanded" src="/logo.png" alt="Hospital" class="h-10 w-10 mr-2" />
      <img v-else src="/logo.png" alt="Hospital" class="h-10 w-10" />
      <span v-if="isExpanded" class="text-xl font-semibold text-gray-800">Dashboard</span>
    </div>

    <nav class="flex-1 overflow-y-auto overflow-x-hidden">
      <ul>
        <li v-for="link in sidebarLinks" :key="link.label">
          <NuxtLink
            :to="link.to"
            class="flex items-center py-3 px-4 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
            :class="{
              'justify-start': isExpanded,
              'justify-center': !isExpanded,
              'bg-blue-50 text-blue-600': $route.path === link.to,
            }"
          >
            <UIcon :name="link.icon" class="w-6 h-6 flex-shrink-0" />
            <span v-if="isExpanded" class="ml-4 whitespace-nowrap">{{ link.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div
      class="p-4 border-t border-gray-200 flex"
      :class="{ 'justify-end': isExpanded, 'justify-center': !isExpanded }"
    >
      <button
        class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
        @click="toggleSidebar"
      >
        <svg
          v-if="isExpanded"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </aside>
</template>

<style scoped>
/* You can add any specific styles here if needed, but Tailwind handles most of it. */
</style>
