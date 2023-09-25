<template>
  <div id="app">
    <DashboardLayout v-if="$route.meta.layout" />
    <Default v-else />
  </div>
</template>

<script>
import DashboardLayout from "./layout/DashboardLayout.vue";
import Default from "./layout/Default.vue";

export default {
  name: "App",
  components: {
    DashboardLayout,
    Default,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggleSidebar(value) {
      this.isVisible = value;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>