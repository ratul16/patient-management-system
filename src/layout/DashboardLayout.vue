<template>
  <div class="dashboard-layout">
    <Sidebar :isVisible="isVisible" @toggle="toggleSidebar" />
    <main>
      <Header @toggleSidebar="toggleSidebar" :sidebar="isVisible" />
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "DashboardLayout",
  components: {
    Header,
    Sidebar,
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
.dashboard-layout {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 16px;
  }
}

@include media-queries("tab-sm") {
  .dashboard-layout {
    // display: flex;
    // flex-direction: column;
    main {
      flex: 1 1 0;
      padding: 16px;
    }
  }
}
</style>