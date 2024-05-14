<template>
  <section class="faq__area p-relative">
    <div class="container">
      <div class="row">
    <div class="col text-center "> <H1 class="centrar">Tren de potencia y paquete de baterías</H1></div> </div> </div>
    <div class="faq__video" :style="{ backgroundImage: `url(${bg})` }">
   <!--  -->
    </div>
    <div class="container-fluid">
      <div class="row justify-content-end">
        <div class="col-xxl- col-xl-7 col-lg-7">
          <div
            class="faq__wrapper-2  faq__style-2 tp-accordion pl-160"
          >
           <!--  <div class="faq__title-wrapper">
              <span class="faq__title-pre"
                >{{el_style ? 'Minimal Design':'Tren de potencia y paquete de baterías.'}}</span
              >
              <h3 class="faq__title">
                {{el_style ? 'Accordion with image':''}}
              </h3>
            </div> -->
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
    <div> <h4 class="">Aiways U5: Consumo combinado de electricidad¹ en kWh/100 km: 13.8 (NEDC);

17.0–16.6 (WLTP). Emisiones combinadas de CO₂¹: 0 g/km. Clase de eficiencia: A+</h4></div></div></div>

</template>

<script>
import SingleFaq from "./SingleFaq.vue";
import bg from "~/assets/img/faq/index-6.png";
import VideoModal from "../common/modals/VideoModal.vue";

export default {
  components: { SingleFaq, VideoModal },
  props:{
    el_style:{
      type:Boolean,
      default:false,
    }
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
          desc: "",
          parent: "about-faqaccordion",
        },
         {
          id: "about-three",
          title: "Seguridad",
          desc: "La separación entre las zonas secas y húmedas garantiza un nivel de seguridad sin precedentes, incluso si la batería se deforma o se rompe. En caso de una colisión grave, el módulo de la batería también está protegido contra fugas de refrigerante. Esto elimina el riesgo de incendio/explosión. Como tal, un espacio de 15 mm entre la parte inferior de la placa de la batería y el módulo de la batería sirve como protección contra impactos",
          parent: "about-faqaccordion",
        },
         {
          id: "about-three",
          title: "Enfriamiento",
          desc: "",
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
.faq__style-2{
  border-left: none;
}
.centrar{
  position: absolute;
}

</style>