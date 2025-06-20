<script setup>
defineProps({
  links: Array,
})

const store = useGlobalStore()
const isSidebarExpanded = computed(() => store.isExpanded)
function toggleSidebar() {
  store.toggleSidebar()
}
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 relative z-50 shadow-md rounded-lg p-4">
    <div class="flex flex-wrap items-center justify-between mx-auto">
      <!-- Logo -->
      <div class="flex items-center mb-0 gap-2">
        <div
          class="w-8 h-8 border-1 rounded-full shadow flex items-center justify-center"
          @click="toggleSidebar()"
        >
          <UIcon
            name="lucide:chevron-right"
            class="size-6 transition-transform duration-300 ease-in-out"
            :class="{ 'rotate-180': isSidebarExpanded, 'rotate-0': !isSidebarExpanded }"
          />
        </div>
        <span class="text-muted"> Pages / </span>
        <span class="capitalize">{{ $route.name }} </span>
      </div>

      <!-- Right side controls -->
      <div class="flex items-center space-x-2 md:order-2">
        <ColorModeButton />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
