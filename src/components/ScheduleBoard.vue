<template>
  <div class="schedule-board shadow-sm">
    <div class="body">
      <h6>Upcoming appointment</h6>
      <div class="event">
        <h4>Thursday, 29th Sept</h4>
        <ul class="pl-1 mb-0">
          <li>
            <i class="fa-solid fa-user-doctor mr-2"></i>
            <span>Dr Harry - Orthopedic</span>
          </li>
          <li>
            <i class="fa-regular fa-clock mr-1"></i>
            <small> 10:30 - 11:00 (30 mins) </small>
          </li>
          <li>
            <i class="fa-solid fa-location-dot mr-2"></i>
            <small> 2451 University Hospital, AL 36617 </small>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer" @click="$router.push({ name: 'appointments' })">See all appointments</div>
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
  border-radius: 10px;
  // border: 1px solid $brand-color-light;
  overflow: hidden;
  .body {
    padding: 16px;
  }
  .footer {
    background-color: $white;
    color: $brand-color-light;
    border-top: 1px solid $brand-color-light;

    padding: 12px;
    text-align: center;
    transition: $transition;
    cursor: pointer;
    &:hover {
      background-color: $brand-color-light;
      color: $white;
      border-color: 1px solid transparent;
    }
  }
  ul {
    list-style-type: none;
    i {
      color: $brand-color-light;
    }
  }
}
</style>