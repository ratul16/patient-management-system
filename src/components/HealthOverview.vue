<template>
  <div class="health-overview">
    <div class="custom-card shadow-sm health-card" v-for="(h, index) in healthStats" :key="index">
      <div class="content">
        <h5>{{ h.name }}</h5>
        <span>{{ h.value }}</span>
        <small class="text-muted">{{ h.caption }}</small>
      </div>
      <i class="fa-solid" :class="h.icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "HealthOverview",
  props: {
    healthStats: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.health-overview {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  .health-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    i {
      color: $brand-color;
      font-size: 40px;
      // margin-bottom: 14px;
    }
    h5 {
      color: $brand-color-dark;
      margin-bottom: 0;
    }
    span {
      display: block;
      color: $brand-color;
      font-weight: 600;
      margin-bottom: 0;
    }
  }
}
@include media-queries("tab") {
  .health-overview {
    grid-template-columns: repeat(2, 1fr);
  }
}
@include media-queries("mobile") {
  .health-overview {
    grid-template-columns: 1fr;
  }
}
</style>