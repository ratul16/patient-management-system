<script setup>
import ColorModeButton from './ColorModeButton.vue'

defineProps({
  links: Array,
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-center py-4">
    <!-- Navigation Bar -->
    <nav class="bg-zinc-900/70 backdrop-blur-sm p-2 rounded-full shadow-lg">
      <ul class="flex items-center space-x-2">
        <li
          v-for="link in links"
          :key="link.label"
          class="text-zinc-400 hover:text-zinc-100 text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300"
        >
          <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
        </li>
        <!-- Separator -->
        <div class="border-l border-zinc-700 h-6 mx-2" />

        <!-- Theme Toggle Button -->
        <li>
          <ColorModeButton />
        </li>
      </ul>
    </nav>
  </header>
  <!-- <div class="fixed top-2 sm:top-4 mx-auto left-1/2 transform -translate-x-1/2 z-10">

    <UNavigationMenu
      :items="links"
      variant="link"
      color="neutral"
      class="bg-muted/80 backdrop-blur-sm rounded-full px-2 sm:px-4 border border-muted/50 shadow-lg shadow-neutral-950/5"
      :ui="{
        link: 'px-2 py-1',
        linkLeadingIcon: 'hidden',
      }"
    >
      <template #list-trailing>
        <ColorModeButton />
      </template>
    </UNavigationMenu>
  </div> -->
</template>
