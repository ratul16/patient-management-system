<template>
  <div class="header shadow-sm">
    <div class="breadcrumb mb-0">
      <div class="toggle" :class="sidebar ? 'expanded' : ''" @click="toggleSidebar()">
        <i class="fa-solid fa-angle-right"></i>
      </div>
      <ol class="breadcrumb text-capitalize mb-0">
        <li class="breadcrumb-item text-muted">Pages</li>
        <li class="breadcrumb-item">{{ $route.name }}</li>
      </ol>
    </div>
    <div class="right-side d-flex">
      <div class="notification px-2 mr-2">
        <!-- <i class="fa-solid fa-bell fa-shake"></i> -->
        <i class="fa-solid fa-bell"></i>
      </div>
      <div class="logout px-2">
        <i class="fa-solid fa-right-from-bracket"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    sidebar: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.toggle = !this.toggle;
      this.$emit("toggleSidebar", this.toggle);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: $white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-radius: 10px;
  // border: 1px solid $brand-color-light;
  margin-bottom: 15px;

  i {
    color: $brand-color-dark;
  }
  .breadcrumb {
    align-items: center;
    background-color: transparent;
    padding: 0;
    .toggle {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1px solid $border-variant-5;
      margin-right: 10px;
      cursor: pointer;
      transition: $transition;

      &.expanded {
        rotate: 180deg;
        border-color: $brand-color;
      }
    }
  }
}
</style>