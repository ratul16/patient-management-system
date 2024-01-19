<template>
  <div class="medication-card shadow-sm">
    <div class="body">
      <h6>Current medication</h6>
      <div class="event">
        <!-- <h4>Thursday, 29th Sept</h4> -->
        <ul class="pl-0 mb-0">
          <li>
            <span><i class="fa-solid fa-pills mr-2"></i> Acetaminophen</span>
            <small class="text-muted">1 pill(s), Daily (every 4 to 6 hours)</small>
          </li>
          <li>
            <span> <i class="fa-solid fa-pills mr-2"></i>Ibuprofen</span>
            <small class="text-muted">1 pill(s), Daily (every 6 to 8 hours)</small>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer" @click="$router.push({ name: 'medications' })">See all medications</div>
  </div>
</template>

<script>
export default {
  name: "MedicationCard",
};
</script>

<style lang="scss" scoped>
.medication-card {
  width: 100%;
  min-height: 100%;
  background-color: $white;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .body {
    padding: 16px;
  }
  ul {
    list-style-type: none;
    li {
      border-radius: 10px;
      border: 1px solid $border-variant-5;
      padding: 10px;
      transition: $transition;
      &:not(:last-child) {
        margin-bottom: 5px;
      }
      &:hover {
        border: 1px solid $brand-color-light;
      }
    }
    span {
      display: block;
    }
    i {
      color: $brand-color;
    }
  }
}
</style>