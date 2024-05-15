<template>
  <section class="portfolio__area pb-60 fix">
    <div class="container">
      <div class="row"></div>
      <div class="row justify-content-center">
        <div class="col-xl-12">
          <div class="portfolio__details-slider p-relative pl-50 pr-50">
            <Carousel
              ref="detailsSlider"
              :items-to-show="1"
              :wrap-around="true"
              :autoplay="2000"
              :transition="900"
              :snapAlign="'center'"
              :breakpoints="{
                992: {
                  itemsToShow: 1,
                },
                700: {
                  itemsToShow: 1,
                },
                0: {
                  itemsToShow: 1,
                },
              }"
              class="portfolio__details-slider-active"
            >
              <Slide
                v-for="(img, i) in images"
                :key="i"
                class="portfolio__details-slider-item"
              >
                <img :src="img" alt="slider img" />
              </Slide>

              <template #addons>
                <pagination />
              </template>
            </Carousel>

            <div
              class="portfolio-details-slider-dot tp-swiper-dot-2 text-center mt-45"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// external
import { Carousel, Slide, Pagination } from "vue3-carousel";
// internal
import img_1 from "~/assets/img/portfolio/details/slider/galeria1.jpg";
import img_2 from "~/assets/img/portfolio/details/slider/galeria2.jpg";
import img_3 from "~/assets/img/portfolio/details/slider/galeria3.jpg";
import img_4 from "~/assets/img/portfolio/details/slider/galeria4.jpg";
import img_5 from "~/assets/img/portfolio/details/slider/galeria5.jpg";
import img_6 from "~/assets/img/portfolio/details/slider/galeria6.jpg";
export default {
  components: { Carousel, Slide, Pagination },
  data() {
    return {
      images: [img_1, img_2, img_3, img_4, img_5, img_6],
    };
  },
};
</script>
