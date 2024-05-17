<template>
  <section class="pricing__area pt-110 pb-140 p-relative z-index-1">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-5 mb-50 text-center title_div">
            Exterior expresivo, Impresionante interior.
          </div>
          <div class="pt-25 pb-25 text-center">
            <p>
              En el U5, que viene completamente equipado de serie, puedes causar
              una gran impresión mientras disfrutas del máximo confort. Su
              diseño elegante pero dinámico es tanto estéticamente agradable
              como atemporal. El interior presume de un estilo de diseño
              minimalista y materiales sofisticados. Prepárate para una variedad
              de opciones de iluminación, una pantalla táctil suspendida como
              elemento de control central y un nivel excepcional de amplitud.
              Gracias a la altura y el espacio para las piernas sin igual en
              esta clase de vehículos, el concepto de espacio interior se
              redefine. No es de extrañar que te sientas como en casa en tu U5
              espectacularmente espacioso.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <!--  -->

      <!--  -->
      <div class="6">
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
            <div class="row">
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
    </div>

    <div class="container mb-50">
      <img
        v-if="selectedSpec"
        :src="selectedSpec.img"
        alt=""
        class="w-100 h-100"
      />
      <div class="title_div mt-40 text-center">
        {{ selectedSpec.desc?.titulo }}
      </div>
      <div class="mt-40 description text-left">
        <p>{{ selectedSpec.desc?.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script>
// price icon

import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";
import { specs } from "~~/mixins/u6_Interior_Exterior.js";

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
  height: auto; /* Maintain aspect ratio */
  display: block;
  border-top-left-radius: 150px; /* Ensure proper alignment */
}

.title_in_photo {
  font-size: 48px;
}

.description {
  font-size: 20px !important;
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
</style>
