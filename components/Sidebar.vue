<script setup>
import BrandLogo from '~/components/BrandLogo.vue'

const sidebarLinks = [
  { label: 'Dashboard', icon: 'fa6-solid:hospital', to: '/' },
  { label: 'Appointments', icon: 'fa6-solid:user-doctor', to: '/appointments' },
  { label: 'Patients', icon: 'fa6-solid:user-injured', to: '/patients' },
  { label: 'Medications', icon: 'fa6-solid:pills', to: '/medications' },
  { label: 'Reports', icon: 'fa6-solid:file-contract', to: '/reports' },
  { label: 'Profile', icon: 'fa6-solid:user', to: '/profile' },
]
</script>

<template>
  <aside
    class="w-16 bg-white dark:bg-gray-900 h-screen fixed top-0 left-0 shadow-lg flex flex-col rounded-tr-2xl rounded-br-2xl overflow-hidden"
  >
    <div class="mt-2 mb-2 flex items-center justify-center border-b-1 pb-3">
      <BrandLogo class="w-10 h-10" />
    </div>

    <nav class="flex-1 overflow-y-auto">
      <ul>
        <li v-for="link in sidebarLinks" :key="link.label">
          <NuxtLink
            :to="link.to"
            class="flex items-center justify-center py-3 px-4 text-brand-primary dark:text-white hover:bg-border-color dark:hover:bg-brand-primary transition-colors duration-200"
            :class="{
              'bg-border-color text-brand-secondary-500 dark:bg-brand-primary-light':
                $route.path === link.to,
            }"
          >
            <UIcon :name="link.icon" class="size-6 flex-shrink-0" />
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="p-4 border-t border-gray-200 flex justify-center">
      <div class="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
        <UIcon name="lucide:chevron-right" class="size-6 text-gray-600 mb-0" />
      </div>
    </div>
  </aside>
</template>

<style scoped></style>
