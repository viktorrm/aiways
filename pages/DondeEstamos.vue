<template>
  <LayoutOne>
    <HomeHero />
  <!--   <HomeAbout/> -->
    <AboutTextArea2/>
    <BoxShadowStyle/>
     <ElVideoMain/>
      <ElVideoMain/>
      <AgencyPricing/>
      <!-- <ElVideoMain/> -->
     <!--  <DetailsDesc/> -->
     <SliderWithDots/>
     <AboutFaqs/>
<FaqArea/>
<HomeAbout/>
<AgencyPricing/>
<EspecificacionesTec2/>
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import HomeHero from '~/components/hero-banner/HomeHero.vue';
import AboutTextArea2 from "/components/Aiways/AboutTextArea2.vue";
import BoxShadowStyle from '~~/elements/elements-iconbox/BoxShadowStyle.vue';
import ElVideoMain from '~~/elements/elements-video/ElVideoMain.vue';
import SliderWithDots from '~~/elements/elements-carousel-main/SliderWithDots.vue';
import DetailsDesc from '~~/components/product-details/DetailsDesc.vue';
import AboutFaqs from '~~/components/faqs/AboutFaqs.vue';
import FaqArea from '~~/components/faqs/FaqArea.vue';
import AgencyPricing from '~~/components/pricing/AgencyPricing.vue';
import HomeAbout from '~/components/abouts/HomeAbout.vue';
import EspecificacionesTec2 from '~~/components/Aiways/EspecificacionesTec2.vue';

useHead({
  title: "Aiways Costa Rica",
});

</script>
