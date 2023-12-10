<template>
  <b-sidebar
    id="report-detail-view"
    ref="sidebar"
    width="50%"
    title="Tour Details"
    bg-variant="white"
    right
    backdrop
    no-header
  >
    <template #default="{ hide }">
      <div
        class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1"
      >
        <h5 class="mb-0">
          Report Details - {{ reportData && reportData.id ? reportData.id : "" }}
        </h5>
        <div class="ml-1 cursor-pointer" @click="hide">
          <i class="fa-solid fa-xmark"></i>
          <!-- {{data.item.id}} -->
        </div>
      </div>
      {{ reportData }}
    </template>
  </b-sidebar>
</template>

<script>
export default {
  name: "ReportSidebar",
  props: {
    reportData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showSidebar: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>