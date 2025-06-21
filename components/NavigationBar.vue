<script setup>
const items = ref([
  {
    label: 'Profile',
    icon: 'fa-user',
    route: '/profile',
    external: false,
  },
  {
    label: 'github',
    icon: 'fa-github',
    route: 'https://github.com/ratul16/patient-management-system',
    external: true,
  },
  {
    label: 'logout',
    icon: 'fa6-solid:right-from-bracket',
    external: false,
  },
])
</script>

<template>
  <nav
    class="bg-white border-gray-200 dark:bg-gray-900 relative z-50 shadow-md rounded-lg px-4 py-2"
  >
    <div class="flex flex-wrap items-center justify-between mx-auto">
      <!-- Logo -->
      <div class="flex items-center mb-0 gap-2">
        <span class="text-muted"> Pages / </span>
        <span class="capitalize">{{ $route.name }} </span>
      </div>

      <!-- Right side controls -->
      <div class="flex items-center md:order-2">
        <NuxtLink
          v-for="item in items"
          :key="item.label"
          :to="item.route"
          :external="item.external"
          :target="item.external ? '_blank' : ''"
          class="leading-none p-2"
        >
          <UIcon :name="item.icon" class="nav-item" />
        </NuxtLink>
        <ColorModeButton />
      </div>
    </div>
  </nav>
</template>

<style scoped>
@reference '@/assets/css/main.css';

.nav-item {
  @apply size-5 text-brand-primary hover:scale-115 transition-transform duration-200 cursor-pointer dark:text-white;
}
</style>
