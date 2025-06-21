<script setup></script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900 relative z-50 shadow-md rounded-lg p-4">
    <div class="flex flex-wrap items-center justify-between mx-auto">
      <!-- Logo -->
      <div class="flex items-center mb-0 gap-2">
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
