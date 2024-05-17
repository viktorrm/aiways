<template>
  <section class="pricing__area pt-110 pb-140 p-relative z-index-1">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-5 mb-50 text-center title_div">
            Tecnologías innovadoras para una seguridad progresiva.
          </div>
          <div class="pt-25 pb-25 text-center">
            <p>
              El Aiways U5 combina una gran cantidad de sistemas de seguridad
              activos y pasivos y características de conveniencia. Viene
              equipado con doce radares ultrasónicos, cinco cámaras HD, tres
              radares de onda milimétrica y dos cámaras interiores de serie, lo
              que permite una visibilidad digital completa. Los diversos
              sensores y cámaras detectan carreteras, vehículos, peatones y
              obstáculos, ayudando a prevenir colisiones. Además, seis airbags y
              múltiples sistemas avanzados de seguridad ayudan a mantenerlo
              seguro. El habitáculo cumple con los requisitos de cinco estrellas
              de Euro NCAP, con otras características de seguridad que previenen
              el robo y ayudan en caso de emergencia. Debido al centro de
              gravedad extremadamente bajo del automóvil, la inclinación lateral
              se reduce al girar en las curvas. Esto se refleja en un estilo de
              conducción más ágil y dinámico, pero siempre completamente seguro.
              El U5 está listo para la conducción autónoma (L2+).
            </p>
          </div>
        </div>
      </div>
      <div class="justify-content-center">
        <div class="pricing__tab-nav tp-tab mb-50 mx-auto">
          <div class="tab-container">
            <button
              v-for="(tab, i) in [specs.interior, specs.exterior]"
              :key="i"
              :class="`${
                activeTab === `tab${1 + i}` ? 'selected_tab' : ''
              } w-100 tab-button${1 + i}`"
              @click="setActiveTab(`tab${1 + i}`, i)"
            >
              {{ i === 0 ? "Interior" : "Exterior" }}
            </button>
          </div>
        </div>
        <div class="tab-pane text-black">
          <section class="faq__area pt-20 pb-25">
            <div class="">
              <div class="faq__tab-2 tp-tab mb-50">
                <ul
                  class="nav justify-content-center nav-tabs"
                  id="myTab"
                  role="tablist"
                >
                  <li v-for="(item, index) in tabSpecs" :key="index">
                    <button
                      :class="`nav-link ${index === 0 ? 'active' : ''}`"
                      :id="`${item.title}-tab`"
                      data-bs-toggle="tab"
                      :data-bs-target="`#${item.title}`"
                      type="button"
                      role="tab"
                      :aria-controls="`${item.title}`"
                      aria-selected="true"
                      @click="selectedSpec = item"
                    >
                      <p>{{ item.title }}</p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="desc mb-50">
            <img
              v-if="selectedSpec && selectedSpec.img"
              :src="selectedSpec.img"
              alt=""
            />
            <video
              v-if="selectedSpec && selectedSpec.video"
              class="video w-100"
              id="video"
              :src="selectedSpec.video"
              ref="video"
              width="800"
              height="400"
              autoplay
              controls
              loop
              muted
              style="object-fit: cover"
            ></video>
            <div class="title_in_photo mt-40 text-center title_div">
              {{ selectedSpec.desc?.titulo }}
            </div>
            <div class="mt-40 description text-left">
              <p>{{ selectedSpec.desc?.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";
import { specs } from "~~/mixins/specs2.js";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      tabSpecs: [],
      specs,
      selectedSpec: {},
      activeTab: "tab1",
    };
  },
  mounted() {
    this.tabSpecs = this.specs.interior;
    this.selectedSpec = this.specs.interior[0];
  },
  methods: {
    setActiveTab(tab, i) {
      this.tabSpecs = i === 0 ? this.specs.interior : this.specs.exterior;
      this.activeTab = tab;
      this.selectedSpec = this.tabSpecs[0];
    },
  },
};
</script>
<style scoped>
.justify-content-center {
  text-align: center;
}
.tab2 {
  padding-left: 70px;
}
/*  */
.tab-container {
  display: flex;
  flex-direction: row;
}

.tab-button1 {
  cursor: pointer;
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 10px 0px 0px 10px;
  outline: none;
}
.tab-button2 {
  cursor: pointer;
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 0px 10px 10px 0px;

  outline: none;
}

.selected_tab {
  background-color: #00cfb4;
  color: #ffffff;
}
.desc {
  width: 100%; /* Adjust width as needed */
  height: auto; /* Adjust height as needed */
  overflow: hidden; /* Ensure image does not overflow container */
  line-height: 30px;
}
.desc img {
  width: 100%; /* Make the image fill the width of the container */
  display: block;
  border-top-left-radius: 150px; /* Ensure proper alignment */
}
.desc video {
  width: 100%; /* Make the image fill the width of the container */
  height: auto; /* Maintain aspect ratio */
  display: block;
}
.title_in_photo {
  font-size: 48px;
}

.description {
  font-size: 25px;
}
.nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}
.faq__tab-2 {
  border-bottom: none;
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
.title_div {
  line-height: 50px;
}
</style>
