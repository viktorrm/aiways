<template>
  <LayoutOne>
    <HomeHero />
    <AboutTextArea />
    <BoxShadowStyle />
    <ElVideoMain />
    <AgencyPricing id="specs" />
    <SliderWithDots />
    <AboutFaqs />
    <FaqArea />
    <HomeAbout />
    <Innovative />
    <Specs2 />
    <EspecificacionesTec />
  </LayoutOne>
</template>

<script setup>
import LayoutOne from "~/layouts/LayoutOne.vue";
import HomeHero from "~/components/hero-banner/HomeHero.vue";
import AboutTextArea from "/components/abouts/about-page-com/AboutTextArea.vue";
import BoxShadowStyle from "~~/elements/elements-iconbox/BoxShadowStyle.vue";
import ElVideoMain from "~~/elements/elements-video/ElVideoMain.vue";
import SliderWithDots from "~~/elements/elements-carousel-main/SliderWithDots.vue";
import DetailsDesc from "~~/components/product-details/DetailsDesc.vue";
import AboutFaqs from "~~/components/faqs/AboutFaqs.vue";
import FaqArea from "~~/components/faqs/FaqArea.vue";
import Specs2 from "~~/components/Aiways/Specs2.vue";
import HomeAbout from "~/components/abouts/HomeAbout.vue";
import EspecificacionesTec from "~~/components/Aiways/EspecificacionesTec.vue";
import AgencyPricing from "~~/components/pricing/AgencyPricing.vue";

useHead({
  title: "Aiways Costa Rica",
});
</script>
<style scoped>
* {
  overflow-x: hidden !important;
}
</style>
