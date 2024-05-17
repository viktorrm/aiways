<template>
  <section class="faq__area">
    <div class="container pb-25">
      <div class="">
        <div class="text-center title_div mb-25">
          Tren de potencia y paquete de baterías
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-sm-12">
          <img :src="bg" alt="" class="w-100" />
        </div>

        <div class="col-xxl-6 col-xl-6 col-lg-6 col-sm-12">
          <div class="faq__wrapper-2 faq__style-2 tp-accordion">
            <div class="accordion" id="about-faqaccordion">
              <single-faq
                v-for="(item, i) in faq_items"
                :key="i"
                :item="item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <div class="row">
      <div>
        <h4 class="">
          Aiways U5: Consumo combinado de electricidad¹ en kWh/100 km: 13.8
          (NEDC); 17.0–16.6 (WLTP). Emisiones combinadas de CO₂¹: 0 g/km. Clase
          de eficiencia: A+
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import SingleFaq from "./SingleFaq.vue";
import bg from "~/assets/img/faq/index-6.png";
import VideoModal from "../common/modals/VideoModal.vue";

export default {
  components: { SingleFaq, VideoModal },
  props: {
    el_style: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      bg,
      faq_items: [
        {
          id: "about-one",
          title: "Motor eléctrico síncrono",
          show: true,
          desc: "Desarrollado internamente por Aiways, el motor eléctrico síncrono de imanes permanentes del automóvil es un motor potente que libera un rendimiento impresionante; Los 150 kW (204 CV) y el par máximo de 310 Nm garantizan una capacidad de respuesta dinámica, junto con la máxima eficiencia y cero emisiones.",
          parent: "about-faqaccordion",
        },
        {
          id: "about-two",
          title: "Potencia y capacidad",
          desc: "Instalado dentro de una estructura sándwich, el paquete de baterías Aiways U5 consta de 24 módulos con alta densidad de energía. Los módulos son suministrados por el renombrado proveedor CATL, mientras que la batería y la electrónica de la batería se han desarrollado internamente. El innovador paquete de baterías cuenta con 63 kWh de capacidad y alimenta el motor con 150 kW y 310 Nm, lo que permite una autonomía de 410 km (400 km para el modelo PRIME).* En virtud de la alta eficiencia de carga, la carga (CC) del 20 % al 80 % tarda solo 35 minutos. Calculado en condiciones de prueba similares a las del WLTP, informe oficial de julio de 2020.",
          parent: "about-faqaccordion",
        },
        {
          id: "about-three",
          title: "Estructura de Sandwich",
          desc: "A diferencia de otros paquetes de baterías automotrices, el paquete de baterías del U5 presenta una estructura de sándwich patentada. La estructura multicapa inserta una pantalla aislante entre el módulo de la batería y la placa de enfriamiento, separando así la zona seca (módulo de la batería) de la zona húmeda (placa de enfriamiento). El enfriamiento eficiente y el precalentamiento aumentan la eficiencia de la batería, lo que, a su vez, permite una mayor capacidad y, por lo tanto, un mayor rango. También se beneficia de una larga vida útil. Incluso después de ocho años, el paquete de baterías aún suministra un mínimo del 80% de su capacidad original.",
          parent: "about-faqaccordion",
        },
        {
          id: "about-four",
          title: "Seguridad",
          desc: "La separación entre las zonas secas y húmedas garantiza un nivel de seguridad sin precedentes, incluso si la batería se deforma o se rompe. En caso de una colisión grave, el módulo de la batería también está protegido contra fugas de refrigerante. Esto elimina el riesgo de incendio/explosión. Como tal, un espacio de 15 mm entre la parte inferior de la placa de la batería y el módulo de la batería sirve como protección contra impactos",
          parent: "about-faqaccordion",
        },
        {
          id: "about-five",
          title: "Enfriamiento",
          desc: "La batería bien aislada está protegida contra el sobrecalentamiento por un sistema de refrigeración líquida. Esto también aumenta la eficiencia de carga y permite una mayor capacidad.La excelente seguridad del sistema de refrigeración del U5 se ha demostrado en una amplia gama de pruebas y simulaciones (incluidas pruebas de compresión, pruebas de caída, pruebas de fuego, pruebas de inundación, pruebas de vibración).",
          parent: "about-faqaccordion",
        },
      ],
    };
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
  },
};
</script>
<style scoped>
.faq__style-2 {
  border-left: none;
  padding-right: 0px !important;
  padding-top: 0px !important;
}
</style>
