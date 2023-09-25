<template>
  <div>
    <b-carousel class="carousel-slider" v-model="slide" :interval="5000" fade>
      <b-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :img-src="slide.imgSrc"
        :img-alt="slide.imgAlt"
        style="height: 100vh"
      >
        <h4 class="mb-0">
          {{ slide.caption }}
        </h4>
        <p>{{ slide.subCaption }}</p>
      </b-carousel-slide>
    </b-carousel>
    <div class="carousel-buttons">
      <div class="previous" @click="prevSlide">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="next" @click="nextSlide">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselSlider",
  data() {
    return {
      slide: 0,
      slides: [
        {
          imgSrc: "https://source.unsplash.com/VT4rx775FT4/",
          imgAlt: "Slide 1",
          caption: "Discover Hidden Treasures",
          subCaption: "Capture the essence of each moment.",
        },
        {
          imgSrc: "https://source.unsplash.com/bs2Ba7t69mM/",
          imgAlt: "Slide 2",
          caption: "Journey to the Unknown",
          subCaption: "Let the journey inspire your soul.",
        },
        {
          imgSrc: "https://source.unsplash.com/lYFERR5dTG4/",
          imgAlt: "Slide 3",
          caption: "Explore the Beauty of Nature",
          subCaption: "Experience the extraordinary.",
        },
      ],
    };
  },
  methods: {
    prevSlide() {
      this.slide--;
    },
    nextSlide() {
      this.slide++;
    },
  },
};
</script>

<style  lang="scss" scoped>
.carousel-slider {
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }
  ::v-deep .carousel-caption {
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 30px 0;
    background-color: rgba(29, 30, 33, 0.8);
  }
}
.carousel-buttons {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 999;
  display: flex;
  gap: 20px;
  & > div {
    position: relative;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    cursor: pointer;
    background-color: rgba(85, 110, 230, 0.2);
    transition: $transition;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      z-index: -1;
      backdrop-filter: blur(20px);
      // border-radius: 50%;
    }
    i {
      color: $white;
    }

    &:hover {
      background-color: rgba(85, 110, 230, 0.6);
    }
  }
}
</style>
