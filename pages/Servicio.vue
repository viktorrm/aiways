<template>
  <LayoutOne>
   
<ElementsHeadingMain/>
    <AboutTextArea2/>
    <BoxShadowStyle/>
    <HomeAbout/>
<UnderlineAccordion/>
</LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';

import UnderlineAccordion from '~~/elements/elements-accordion/UnderlineAccordion.vue'
import ElementsHeadingMain from '~~/elements/elements-heading/ElementsHeadingMain.vue'
import AboutTextArea2 from "/components/Aiways/AboutTextArea2.vue";
import BoxShadowStyle from '~~/elements/elements-iconbox/BoxShadowStyle.vue';

import AboutFaqs from '~~/components/faqs/AboutFaqs.vue';
import FaqArea from '~~/components/faqs/FaqArea.vue';
import AgencyPricing from '~~/components/pricing/AgencyPricing.vue';
import HomeAbout from '~/components/abouts/HomeAbout.vue';
import EspecificacionesTec2 from '~~/components/Aiways/EspecificacionesTec2.vue';
import ElementsHeadingMainVue from '~~/elements/elements-heading/ElementsHeadingMain.vue';

useHead({
  title: "Aiways Costa Rica",
});

</script>
