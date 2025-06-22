<script setup></script>

<template>
  <div class="schedule-board rounded-lg element-bg">
    <div class="p-4">
      <h6 class="text-muted text-sm">Upcoming appointment</h6>
      <div class="event">
        <h4 class="font-semibold element-header">Thursday, 29th Sept</h4>
        <ul class="mb-0 list-none">
          <li>
            <UIcon name="fa6-solid:user-doctor" class="size-4 mr-1 element-header" />
            <span>Dr Harry - Orthopedic</span>
          </li>
          <li>
            <UIcon name="fa6-solid:clock" class="size-4 mr-1 element-header" />
            <small> 10:30 - 11:00 (30 mins) </small>
          </li>
          <li>
            <UIcon name="fa6-solid:location-dot" class="size-4 mr-1 element-header" />
            <small> 2451 University Hospital, AL 36617 </small>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="border-t border-gray-200 dark:border-gray-700 p-4 text-center text-brand-primary-500 dark:text-brand-primary-400 cursor-pointer hover:bg-gray-50 dark:hover:bg-brand-primary-light transition-colors duration-200"
      @click="$router.push({ name: 'appointments' })"
    >
      See all appointments
    </div>
  </div>
</template>

<style scoped></style>
