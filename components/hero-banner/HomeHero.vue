<template>
  <section class="slider__area p-relative">
    <Swiper
      class="slider__active swiper-container"
      :slidesPerView="1"
      :loop="true"
      :modules="modules"
      :effect="'fade'"
      :pagination="{
        el: '.main-slider-dot',
        clickable: true,
        renderBullet: renderBullet,
      }"
    >
      <SwiperSlide
        v-for="(item, i) in slider_data"
        :key="i"
        class="slider__item slider__height include-bg pt-100 pb-100 d-flex align-items-center"
      >
        <div
          class="slider__bg p-relative include-bg"
          :style="{ backgroundImage: `url(${item.bg})` }"
        ></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-xxl-12">
              <div class="slider__content text-center">
                <span class="slider__title-pre">
                  {{ item.pre_title }}
                </span>
                <h3 class="slider__title" v-html="item.title"></h3>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <!--  -->
  </section>
</template>

<script>
// internal
import bg_1 from "~/assets/img/slider/u5banner.jpg";
import bg_2 from "~/assets/img/slider/slider-2.jpg";
import bg_3 from "~/assets/img/slider/slider-3.jpg";
/* import SliderForm from "~~/components/forms/SliderForm.vue"; */
// external
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectFade } from "swiper";
/* import  StartUpCounter  from "~/components/hero-banner/HomeHero.vue"; */

export default {
  components: {
    Swiper,
    SwiperSlide,
    /*    SliderForm, */
    /*     StartUpCounter, */
  },
  data() {
    return {
      bg_1,
      bg_2,
      bg_3,
      slider_data: [
        {
          id: 1,
          title: "El nuevo Aiways U5",
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

<style scoped>
.slider__title {
  position: 0;
  margin: -370px;
  font-family: Open Sans light;
  font-weight: 100;
  font-size: 70px;
  letter-spacing: 2px;
}
@media screen and (max-width: 768px) {
  .slider__title {
    font-size: 8vw; /* Tamaño de fuente relativo al ancho del viewport para dispositivos más pequeños */
  }
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

@media screen and (max-width: 768px) {
  .swiper-container {
    height: 600px;
    padding-bottom: 0px !important;
  }
  .slider__bg {
    height: 500px;
    padding-bottom: 0px !important;
  }
}
</style>
