<template>
  <div class="schedule-board shadow-sm">
    <h6>Upcoming Events</h6>
    <ul class="pl-0 mb-0">
      <li>
        <span> Doctors Appointment </span>
        <small class="text-muted"> 29th September, 2023 </small>
      </li>
      <li>
        <span> Medical Test Appointment </span>
        <small class="text-muted"> 10th October, 2023 </small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ScheduleBoard",
};
</script>

<style lang="scss" scoped>
.schedule-board {
  width: 100%;
  min-height: 100%;
  background-color: $white;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid $brand-color-light;

  ul {
    list-style-type: none;
    li {
      border-radius: 10px;
      border: 1px solid $border-variant-5;
      padding: 10px;
      display: flex;
      flex-direction: column;
      transition: $transition;
      cursor: pointer;
      &:not(:last-child) {
        margin-bottom: 5px;
      }
      &:hover {
        border: 1px solid $brand-color-light;
      }
    }
  }
}
</style>