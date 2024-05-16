<template>
  <section class="slider__area p-relative">
    <div class="header">
      <video
        class="video w-100"
        id="video"
        :src="srcVideo"
        ref="video"
        width="800"
        height="400"
        autoplay
        loop
        muted
        style="object-fit: cover"
      ></video>
      <h1 class="title">Descubre el Aiways U6</h1>
    </div>
    <!--  -->
  </section>
</template>

<script>
// internal
import bg_1 from "~/assets/aiways/slider/videou6.mp4";
import bg_2 from "~/assets/img/slider/slider-2.jpg";
import bg_3 from "~/assets/img/slider/slider-3.jpg";
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
      bg_1,
      bg_2,
      bg_3,
      slider_data: [
        {
          id: 1,
          title: "Descubre el Aiways U6",
          bg: bg_1,
        },
        {
          id: 2,
          pre_title: "Hello! Consulting",
          title: "To This Template Than What You Can See",
          bg: bg_2,
        },
        {
          id: 3,
          pre_title: "Hello! Consulting",
          title: "Digital Age Adventure <br /> In Marketing",
          bg: bg_3,
        },
      ],
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

<style scoped>
.header {
  position: relative;
}

canvas {
  width: 100%;
  height: auto;
  display: block;
}

.title {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 48px;
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
}
</style>
