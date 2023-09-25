<template>
  <div class="default-layout">
    <!-- <NavigationBar /> -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";

export default {
  name: "DefaultLayout",
  components: {
    NavigationBar,
  },
};
</script>

<style lang="scss" scoped>
</style>