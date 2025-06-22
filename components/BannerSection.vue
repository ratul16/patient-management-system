<script setup>
defineProps({
  name: {
    type: String,
    default: 'User',
  },
})
</script>

<template>
  <div class="element-bg rounded-lg p-6 flex items-center justify-between">
    <div>
      <h4 class="mb-2 text-2xl element-header font-bold">Welcome {{ name }}</h4>
      <p>
        Ensure your well-being by letting us assess your health. Take proactive steps towards a
        healthier life starting today for a brighter future.
      </p>
      <button class="btn-primary">Book Appointment</button>
    </div>
  </div>
</template>
