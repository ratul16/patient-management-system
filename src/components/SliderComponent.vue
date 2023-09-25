<template>
  <div>
    <Swiper
      :navigation="true"
      :grabCursor="true"
      :slidesPerView="'auto'"
      :spaceBetween="5"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="custom-swiper"
    >
      <SwiperSlide v-for="b in breeds" :key="b.name">
        <div class="card">
          <img :src="b.url" alt="" />
          <router-link to="/about" class="content">
            <h4 class="mb-0 brand-color-3">{{ b.breed }}</h4>
            <!-- <small class="text-muted">ID: {{ b.puppyId }}</small> <br />
            <small class="brand-color-3 fw-bold">
              {{ b.gender }}
              <i class="fa-solid" :class="b.gender === 'Male' ? 'fa-mars' : 'fa-venus'"></i>
            </small> -->
          </router-link>
        </div>
      </SwiperSlide>
    </Swiper>
    <div ref="nextEl" class="swiper-button-prev"></div>
    <div ref="prevEl" class="swiper-button-next"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import data from "../data/breedList.json";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
  data() {
    return {
      breeds: data,
    };
  },
};
</script>

<style lang="scss" scoped>
.custom-swiper {
  // width: 600px;
  height: 320px;
  .swiper-slide {
    width: fit-content;
    // border: 1px solid yellow;
    .card {
      position: relative;
      width: 360px;
      height: 100%;
      border-radius: 5px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        transition: $transition;
      }
      .content {
        width: 340px;
        padding: 10px;
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid $white;
        color: inherit;
        text-decoration: none;
        background-color: $white;
        border-radius: 5px;
        cursor: pointer;
        transition: $transition;
      }
      &:hover {
        img {
          scale: 1.5;
          object-position: top;
        }
        .content {
          border-color: $brand-color-1;
        }
      }
    }
  }
}

::v-deep {
  .swiper-pagination-bullet-active {
    background-color: $brand-color-1 !important;
  }

  .swiper-pagination-bullet {
    background-color: grey;
  }

  // .swiper-button-prev,
  // .swiper-button-next {
  //   top: 50%;
  //   width: 40px;
  //   height: 40px;
  //   background: white;
  //   border: 3px solid $brand-color-2;
  //   border-radius: 50%;
  //   color: $brand-color-1;
  //   font-weight: 700;
  //   outline: 0;
  //   transition: background-color 0.2s ease, color 0.2s ease;

  //   &::after {
  //     font-size: 18px;
  //   }
  // }

  // .swiper-button-prev {
  //   &:after {
  //     position: relative;
  //     left: -1px;
  //   }
  // }

  // .swiper-button-next {
  //   &:after {
  //     position: relative;
  //     left: 1px;
  //   }
  // }

  // .swiper-button-prev,
  // .swiper-container-rtl .swiper-button-next {
  //   left: 10px;
  //   right: auto;
  // }

  // .swiper-button-next,
  // .swiper-container-rtl .swiper-button-prev {
  //   right: 10px;
  //   left: auto;
  // }

  // .swiper-button-prev.swiper-button-disabled,
  // .swiper-button-next.swiper-button-disabled {
  //   opacity: 0;
  //   cursor: auto;
  //   pointer-events: none;
  // }
}
</style>