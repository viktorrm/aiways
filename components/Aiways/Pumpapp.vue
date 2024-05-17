<template>
  <section id="tpabout" class="about__area pt-120 pb-120">
    <div class="container">
      <div class="row">
        <div class="text-center mt-100 mb-50 title_div">
          Carga fácil con Plugshare.
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="about__thumb-wrapper ml-70 pr-100">
            <div
              class="about__thumb w-img"
              data-sal="slide-right"
              data-sal-delay="130"
              data-sal-duration="1000"
            >
              <div class="tp-thumb-overlay wow"></div>
              <img src="~/assets/img/app.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div
            class="about__wrapper pr-95"
            data-sal="slide-up"
            data-sal-delay="170"
            data-sal-duration="1000"
          >
            <p>
              ¿Quieres mantener un ojo en los tiempos de carga, estaciones de
              carga y disponibilidad a lo largo de tu ruta? Entonces descarga la
              aplicación gratuita PUMP para iOS.
            </p>

            <div class="about__btn">
              <nuxt-link
                href="https://www.plugshare.com/map/costa-rica"
                class="tp-btn"
                >Ir a la página</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
};
</script>
<style scoped>
.tp-btn {
  border-radius: 4px;
  background: #00cfb4;
}
.w-img img {
  border-bottom-left-radius: 45px !important;
}
</style>
