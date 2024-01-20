<template>
  <div class="statistics-card custom-card shadow-sm">
    <div class="d-flex justify-content-between align-items-center">
      <div class="content">
        <span>{{ title }}</span>
        <h4>{{ value }}</h4>
      </div>
      <i class="fa-solid" :class="iconClass"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      required: true,
    },
    iconClass: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.statistics-card {
  border-radius: 10px;
  i {
    color: $brand-color;
    font-size: 36px;
  }
  span {
    font-weight: 500;
    font-size: 16px;
  }
  h4 {
    color: $brand-color;
    margin-bottom: 0;
    font-weight: 600;
  }
}
</style>