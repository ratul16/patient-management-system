<template>
  <div class="banner shadow-sm">
    <div>
      <h4 class="mb-2">Welcome {{ name }}</h4>
      <p>
        Ensure your well-being by letting us assess your health. Take proactive steps towards a
        healthier life starting today for a brighter future.
      </p>
      <b-button variant="outline-primary"> Book Appointment </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerSection",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  border-radius: 10px;
  background-color: $white;
  padding: 16px;
  // border: 1px solid $brand-color-light;
}
</style>