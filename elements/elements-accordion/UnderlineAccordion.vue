<template>
  <section class="accordion__area pt-110 pb-85">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="tp-section-wrapper-3 mb-50 text-center title_div">
            ¿Alguna otra consulta?
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="faq__wrapper tp-accordion">
            <div class="accordion" id="faqaccordion">
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
</template>

<script>
import SingleFaq from "~~/components/faqs/SingleFaq.vue";
import commonFaq from "~~/mixins/commonFaq";

export default {
  components: { SingleFaq },
  mixins: [commonFaq],
};
</script>
