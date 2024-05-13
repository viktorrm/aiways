<template>
  <section class="slider__area p-relative">
    <div class="">
      <div
        class="slider__height slider__bg p-relative include-bg"
        :style="{ backgroundImage: `url(${bg_1})` }"
      ></div>
    </div>
  </section>
</template>

<script>
// internal
import bg_1 from "~/assets/img/slider/slider-1.jpg";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectFade } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
    // SliderForm,
  },
  data() {
    return {
      bg_1,
      slider_data: [
        {
          id: 1,
          pre_title: "Hello! Consulting",
          title: "Workshops Business Consulting",
          bg: bg_1,
        },
        {
          id: 2,
          pre_title: "Hello! Consulting",
          title: "Workshops Business Consulting",
          bg: bg_1,
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
};
</script>
