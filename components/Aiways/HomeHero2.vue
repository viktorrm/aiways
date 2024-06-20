<template>
  <section class="slider__area p-relative">
    <div class="header">
      <video
        class="video w-100"
        id="video"
        :src="srcVideo"
        ref="video"
        autoplay
        loop
        muted
        style="object-fit: cover"
      ></video>
    </div>
    <h1 class="title2">Descubre el Aiways U6</h1>
    <!--  -->
  </section>
</template>

<script>
// internal

import srcVideo from "~/assets/img/aiways/videou6.mp4";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectFade } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      srcVideo: srcVideo,
      video: null,
      canvas: null,
      ctx: null,
      title: "Your Title Here",
    };
  },
  methods: {
    renderBullet: function (index, className) {
      return `<span class=${className}>
              <button>${index < 9 ? "0" : ""}${index + 1}</button>
             </span>`;
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, EffectFade],
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
}

canvas {
  width: 100%;
  height: auto;
  display: block;
}

.slider__area h1 {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 48px;
  @media screen and (max-width: 750px) {
    font-size: 28px;
    top: 35%;
    left: 10%;
    transform: translate(6%, -50%);
  }
}

/*  */
.slider__title {
  position: 0;
  margin: -320px;
}
.slider__height {
  margin-top: 80px;
}
.slider__overlay {
  background-color: none;
}
.slider__bg {
  background-color: transparent;
  backdrop-filter: 0;
}
.video {
  height: 800px;
  margin-top: 80px;
  @media screen and (max-width: 750px) {
    height: 300px;
  }
}
.title2 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 100;
  font-size: 70px;
  letter-spacing: 2px;
}
</style>
