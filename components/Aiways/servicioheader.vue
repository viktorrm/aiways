<template>
  <section class="about__text pt-115 pb-100">
    <div class="container">
      <div class="row">
        <div class="">
          <div
            class="about__text-wrapper title_div text-center mb-50"
            data-sal=""
            data-sal-delay="130"
            data-sal-duration="1000"
          >
            Servicio al cliente Aiways
          </div>
        </div>
        <div class="container align-text-center">
          <div class="">
            <p>
              En Costa Rica, el servicio al cliente (incluido el soporte
              técnico) se proporciona a nivel nacional a través de una red de
              Electroautos Costa Rica. Estos socios reciben formación continua y
              desarrollo sobre el U5 y U6, lo que les permite brindarle un
              servicio ejemplar.
            </p>
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
.align {
  text-align: center;
}
</style>
