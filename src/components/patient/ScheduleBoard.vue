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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  h4 {
    color: $brand-color;
  }
  .body {
    padding: 16px;
  }
  ul {
    list-style-type: none;
    i {
      color: $brand-color;
    }
  }
}
</style>