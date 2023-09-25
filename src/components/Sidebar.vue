<template>
  <aside class="sidebar shadow-sm" :class="isVisible ? 'expanded' : ''">
    <div class="logo" @click="toggleSidebar()">
      <!-- need to fix asset url handling -->
      <LogoSvg :width="50" :height="50" />
      <h5 class="mb-0">Dashboard</h5>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item" v-for="(r, index) in routeList" :key="index">
        <router-link :to="{ name: r.route }" class="nav-link">
          <i class="fa-solid" :class="r.icon"></i>
          <span class="item-text">{{ r.name }}</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import LogoSvg from "./icon/LogoSvg.vue";

export default {
  name: "Sidebar",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    LogoSvg,
  },
  data() {
    return {
      toggle: false,
      siteName: import.meta.env.VITE_SITE_NAME,
      routeList: [
        {
          route: "dashboard",
          name: "Dashboard",
          icon: "fa-hospital",
        },
        {
          route: "appointments",
          name: "Appointments",
          icon: "fa-user-doctor",
        },
        {
          route: "patients",
          name: "Patients",
          icon: "fa-user-injured",
        },
        {
          route: "reports",
          name: "Reports",
          icon: "fa-file-contract",
        },
        {
          route: "billings",
          name: "Billings",
          icon: "fa-credit-card",
        },
        {
          route: "profile",
          name: "Profile",
          icon: "fa-user",
        },
      ],
    };
  },
  methods: {
    toggleSidebar() {
      if (this.isVisible) {
        this.$emit("toggle", false);
      }
    },
    // getImageUrl(url) {
    //   return new URL(url, import.meta.url).href;
    // },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  background: $white;
  width: calc(32px + $sidebar-icon-width);
  min-height: 100vh;
  padding: 16px 0;
  transition: $transition;
  overflow: hidden;
  border-radius: 0 16px 16px 0;
  // border: 1px solid $border-variant-4;
  font-size: 14px;

  // &::before {
  //   position: absolute;
  //   contain: " ";
  //   width: 40px;
  //   height: 40px;
  //   background-color: red;
  //   top: 0;
  //   z-index: 100;
  //   right: 0;
  // }

  .logo {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 26px 6px;
    isolation: isolate;
    h5 {
      z-index: -1;
      opacity: 0;
      position: absolute;
      bottom: 15px;
      right: 20px;
      transition: $transition;
    }
  }

  .navbar-nav {
    // gap: 10px;
    .nav-link {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: $brand-color-dark;
      transition: $transition;
      i {
        font-size: 20px;
        // margin-right: 16px;
        transition: $transition;
      }
      .item-text {
        opacity: 0;
        margin-left: 16px;
        transition: $transition;
      }
      &:hover {
        background-color: $hover;
      }
    }
  }

  &.expanded {
    width: $sidebar-width;
    .logo {
      h5 {
        opacity: 1;
      }
    }
    .navbar-nav {
      .nav-link {
        .item-text {
          opacity: 1;
        }
      }
    }
  }
}

@include media-queries("tab-sm") {
  .sidebar {
    position: absolute;
    z-index: 99;
    left: calc(-32px - $sidebar-icon-width);
    &.expanded {
      left: 0;
    }
  }
}
</style>