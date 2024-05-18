<template>
  <section class="portfolio__area pb-60 fix">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12">
          <div class="portfolio__details-slider p-relative pl-50 pr-50">
            <Carousel
              ref="detailsSlider"
              :items-to-show="1"
              :autoplay="2000"
              :transition="900"
              :wrap-around="true"
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
import galeria1 from "~/assets/img/aiways/galeria1.jpg";
import galeria2 from "~/assets/img/aiways/galeria2.jpg";
import galeria3 from "~/assets/img/aiways/galeria3.jpg";
import galeria4 from "~/assets/img/aiways/galeria4.jpg";
import galeria5 from "~/assets/img/aiways/galeria5.jpg";
import galeria6 from "~/assets/img/aiways/galeria6.jpg";

export default {
  components: { Carousel, Slide, Pagination },
  data() {
    return {
      images: [galeria1, galeria2, galeria3, galeria4, galeria5, galeria6],
    };
  },
};
</script>
<style lang="scss">
.portfolio__details-slider
  .carousel__pagination
  li
  .carousel__pagination-button.carousel__pagination-button--active {
  background-color: #00cfb4;
}
</style>
