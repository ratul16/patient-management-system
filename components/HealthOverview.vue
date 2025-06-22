<script setup>
defineProps({
  healthStats: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <div
      v-for="(h, index) in healthStats"
      :key="index"
      class="flex items-center justify-between rounded-lg shadow-sm p-4 element-bg"
    >
      <div class="flex flex-col">
        <h4 class="element-header text-lg font-semibold mb-0">
          {{ h.name }}
        </h4>
        <span
          class="text-brand-primary-500 dark:text-brand-primary-400 font-bold text-2xl block mb-0"
        >
          {{ h.value }}
        </span>
        <small class="text-gray-500 dark:text-gray-400 text-sm">
          {{ h.caption }}
        </small>
      </div>
      <UIcon
        :name="h.icon"
        class="fa-solid text-brand-primary-500 dark:text-brand-primary-400 text-4xl"
      />
    </div>
  </div>
</template>

<style scoped></style>
