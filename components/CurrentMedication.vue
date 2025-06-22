<script setup></script>

<template>
  <div class="w-full element-bg rounded-lg shadow-sm overflow-hidden flex flex-col justify-between">
    <div class="p-4">
      <h4 class="text-lg font-semibold element-header mb-2">Current medication</h4>
      <div class="event">
        <ul class="list-none pr-2 m-0 overflow-y-scroll max-h-60">
          <li class="list-item">
            <span class="block text-gray-800 dark:text-gray-100 font-medium">
              <UIcon
                name="fa6-solid:pills"
                class="fa-pills mr-2 text-brand-primary-500 dark:text-brand-primary-400"
              />
              Acetaminophen
            </span>
            <small class="text-gray-500 dark:text-gray-400 text-sm">
              1 pill(s), Daily (every 4 to 6 hours)
            </small>
          </li>
          <li class="list-item">
            <span class="block text-gray-800 dark:text-gray-100 font-medium">
              <UIcon
                name="fa6-solid:pills"
                class="mr-2 text-brand-primary-500 dark:text-brand-primary-400"
              />
              Ibuprofen
            </span>
            <small class="text-gray-500 dark:text-gray-400 text-sm">
              1 pill(s), Daily (every 6 to 8 hours)
            </small>
          </li>
          <li class="list-item">
            <span class="block text-gray-800 dark:text-gray-100 font-medium">
              <UIcon
                name="fa6-solid:pills"
                class="mr-2 text-brand-primary-500 dark:text-brand-primary-400"
              />
              Ibuprofen
            </span>
            <small class="text-gray-500 dark:text-gray-400 text-sm">
              1 pill(s), Daily (every 6 to 8 hours)
            </small>
          </li>
          <li class="list-item">
            <span class="block text-gray-800 dark:text-gray-100 font-medium">
              <UIcon
                name="fa6-solid:pills"
                class="mr-2 text-brand-primary-500 dark:text-brand-primary-400"
              />
              Ibuprofen
            </span>
            <small class="text-gray-500 dark:text-gray-400 text-sm">
              1 pill(s), Daily (every 6 to 8 hours)
            </small>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="border-t border-gray-200 dark:border-gray-700 p-4 text-center text-brand-primary-500 dark:text-brand-primary-400 cursor-pointer hover:bg-gray-50 dark:hover:bg-brand-primary-light transition-colors duration-200"
      @click="$router.push({ name: 'medications' })"
    >
      See all medications
    </div>
  </div>
</template>

<style scoped>
@reference '@/assets/css/main.css';

.list-item {
  @apply rounded-lg border border-border-color dark:border-gray-700 p-2 transition-all duration-300 ease-in-out hover:border-brand-primary-light mb-2 last:mb-0;
}
</style>
