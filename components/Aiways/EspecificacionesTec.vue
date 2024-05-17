<template>
  <div class="container">
    <div class="">
      <div class="text-center mt-100 title_div">
        Especificaciones Técnicas prueba
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
              <li
                class="nav-item"
                role="presentation"
                v-for="(item, i) in [specs.prime, specs.xcite]"
                :key="i"
              >
                <button
                  :class="`nav-link ${indexSelected === i ? 'active' : ''}`"
                  :id="`${item.titulo}-tab`"
                  data-bs-toggle="tab"
                  :data-bs-target="`#${item.titulo}`"
                  type="button"
                  role="tab"
                  :aria-controls="`${item.titulo}`"
                  aria-selected="true"
                  @click="selectTab(item, i)"
                >
                  {{ item.titulo }}
                </button>
              </li>
            </ul>
          </div>
          <h3>
            <a href="#" class="donwload_pdf fcolor" @click="downloadPdf">
              Ver pdf
            </a>
          </h3>
          <div class="row">
            <div
              class="col-6 my-2"
              v-for="(item, i) in selectedTab.specs"
              :key="i"
            >
              <p>{{ item.titulo }}</p>
              <h3 class="fcolor mb-4">{{ item.desc }}</h3>
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
import { specs } from "~~/mixins/tecSpecs";
export default {
  components: { SingleFaq },
  methods: {
    downloadPdf() {
      // create element <a> for download PDF
      const link = document.createElement("a");
      link.href = "/pdf/U5-Model-comparison.pdf";
      link.target = "_blank";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    selectTab(item, i) {
      this.selectedTab = item;
      this.indexSelected = i;
    },
  },
  data() {
    return {
      specs,
      indexSelected: 0,
      selectedTab: { ...specs.prime },
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
