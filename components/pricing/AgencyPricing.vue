<template>
  <section class="pricing__area pt-110 pb-140 p-relative z-index-1">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-5 mb-50 text-center">
            <h3 class="section__title-5">
              Exterior expresivo, Impresionante interior.
            </h3>
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
      <div class="row justify-content-center">
        <!--  -->

        <!--  -->
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <div class="pricing__tab-nav tp-tab mb-50 mx-auto">
            <div class="tab-container">
              <button
                v-for="(tab, i) in [specs.interior, specs.exterior]"
                :key="i"
                :class="`${
                  activeTab === `tab${2 - i}` ? 'selected_tab' : ''
                } w-100 tab-button${2 - i}`"
                @click="setActiveTab(`tab${2 - i}`, i)"
              >
                {{ i === 0 ? "Interior" : "Exterior" }}
              </button>
            </div>
          </div>
          <div class="tab-pane text-black">
            <section class="faq__area pt-20 pb-25">
              <div class="container">
                <div class="row">
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
                            {{ item.title }}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="desc mb-50">
            <img v-if="selectedSpec" :src="selectedSpec.img" alt="" />
            <div class="title_in_photo mt-40 text-center">
              {{ selectedSpec.title }}
            </div>
            <div class="mt-40 description text-left">
              {{ selectedSpec.desc?.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// price icon
import price_icon_1 from "~/assets/img/price/5/price-icon-1.png";
import price_icon_2 from "~/assets/img/price/5/price-icon-2.png";
import price_icon_3 from "~/assets/img/price/5/price-icon-3.png";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";
import { specs } from "~~/mixins/u5_Interior_Exterior.js";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      tabSpecs: [],
      specs,
      selectedSpec: {},
      activeTab: "tab1",
      pricing_data: [
        {
          id: "nav-monthly",
          pricing_items: [
            {
              icon: price_icon_1,
              price: 0,
              price_text: "free",
              text: "Perfect Plan for Starters.",
              tag: "Starter",
              feature_text: "Includes:",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support",
              ],
            },
            {
              has_popular: true,
              icon: price_icon_2,
              price: 150,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support",
                "Customer Managemet",
              ],
            },
            {
              icon: price_icon_3,
              price: 220,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "User provisioning (SCIM)",
                "Databases with rich property types",
                "Custom guest editors",
                "24 hour support",
                "Customer Managemet",
              ],
            },
          ],
        },
        {
          id: "nav-yearly",
          active: true,
          pricing_items: [
            {
              icon: price_icon_1,
              price: 0,
              price_text: "free",
              text: "Perfect Plan for Starters.",
              tag: "Starter",
              feature_text: "Includes:",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support",
              ],
            },
            {
              has_popular: true,
              icon: price_icon_2,
              price: 198,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support",
                "Customer Managemet",
              ],
            },
            {
              icon: price_icon_3,
              price: 298,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "User provisioning (SCIM)",
                "Databases with rich property types",
                "Custom guest editors",
                "24 hour support",
                "Customer Managemet",
              ],
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.tabSpecs = this.specs.interior;
  },
  methods: {
    setActiveTab(tab, i) {
      this.tabSpecs = i === 1 ? this.specs.interior : this.specs.exterior;
      this.activeTab = tab;
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
  border-radius: 0px 10px 10px 0px;
  outline: none;
}
.tab-button2 {
  cursor: pointer;
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 10px 0px 0px 10px;
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
</style>
