<script setup>
const sampleHealthStats = [
  { name: 'Blood Pressure', value: '120/80', caption: 'mmHg', icon: 'fa6-solid:heart-pulse' },
  { name: 'Heart Rate', value: '75', caption: 'bpm', icon: 'fa6-solid:heart' },
  { name: 'Temperature', value: '37.0°C', caption: 'Normal', icon: 'fa6-solid:temperature-half' },
  { name: 'Weight', value: '70kg', caption: 'Stable', icon: 'fa6-solid:weight-scale' },
]
</script>

<template>
  <div class="paitent-view">
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
      <BannerSection name="Hasib" />
      <ScheduleBoard />
    </div>
    <div class="my-4">
      <HealthOverview :health-stats="sampleHealthStats" />
    </div>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4">
      <CurrentMedication />
      <ReportListView />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
