<template>
  <div class="container">
    <div class="">
      <div class="text-center mt-100 mb-5">
        <H1 class="centrar">Especificaciones Técnicas</H1>
      </div>
    </div>
  </div>
  <section class="faq__area pt-100 pb-25">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-12 img_specs">
          <img src="/_nuxt/assets/img/aiways/u5-premium.jpg" />
        </div>
        <div class="col-lg-6 col-sm-12">
          <div class="faq__tab-2 tp-tab mb-50">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="general-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#general"
                  type="button"
                  role="tab"
                  aria-controls="general"
                  aria-selected="true"
                >
                  PRIME
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="community-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#community"
                  type="button"
                  role="tab"
                  aria-controls="community"
                  aria-selected="false"
                >
                  XCITE
                </button>
              </li>
            </ul>
          </div>
          <div><h5 class="fcolor">Descarga el pdf</h5></div>
          <div class="row">
            <div class="col-6 mt-10">
              <h5>Potencia del motor</h5>
              <h3 class="fcolor mb-4">150 kW / 204 hp</h3>
              <div class="mb-4">
                <h5>Par máximo</h5>
                <h3 class="fcolor">310 Nm</h3>
              </div>
              <div class="mb-4">
                <h5>0-100km/h</h5>
                <h3 class="fcolor">7,8 seg</h3>
              </div>
              <h5>Peso</h5>
              <h3 class="fcolor">1,770 kg</h3>
            </div>
            <div class="col-6 mt-10">
              <h5 class="">Autonomía (WLTP)</h5>
              <h3 class="fcolor">400 km</h3>
              <h5 class="mt-4">Tiempo de carga rápida</h5>
              <h3 class="fcolor">35 min*</h3>
              <h5 class="mt-4">Capacidad de batería</h5>
              <h3 class="fcolor">63 kWh</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="faq__item-wrapper">
        <div class="tab-content" id="faqTabContent"></div>
      </div>
    </div>
  </section>
</template>

<script>
import SingleFaq from "~~/components/faqs/SingleFaq.vue";
import { specs } from "~~/mixins/u5_Interior_Exterior.js";

export default {
  components: { SingleFaq },
  data() {
    return {
      specs: specs,
    };
  },
  props: {
    el_style: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped>
.img_specs img {
  width: 100%;
  border-bottom-right-radius: 80px;
}
.fcolor {
  color: #00cfb4;
}
.faq__tab-2 .nav-link.active {
  background-color: #ffffff;
  color: #00cfb4;
}
.faq__tab-2 .nav-link::after {
  background-color: #00cfb4;
  color: #00cfb4;
}
</style>
