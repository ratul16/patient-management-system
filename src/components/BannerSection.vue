<template>
  <div class="banner shadow-sm">
    <div>
      <h4 class="mb-3">Welcome John Doe</h4>
      <p>
        Ensure your well-being by letting us assess your health. Take proactive steps towards a
        healthier life starting today for a brighter future.
      </p>
      <b-button variant="outline-primary"> Contact Doctor </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerSection",
};
</script>

<style lang="scss" scoped>
.banner {
  border-radius: 10px;
  background-color: $white;
  padding: 26px;
  border: 1px solid $brand-color-light;
}
</style>