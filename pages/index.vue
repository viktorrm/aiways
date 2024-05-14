<template>
  <LayoutOne>
    <HomeHero />
  <!--   <HomeAbout/> -->
    <AboutTextArea/>
    <BoxShadowStyle/>
     <ElVideoMain/>
      <!-- <ElVideoMain/> -->
      <DetailsDesc/>
     <SliderWithDots/>
     <AboutFaqs/>
<FaqArea/>
<AgencyPricing/>
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import HomeHero from '~/components/hero-banner/HomeHero.vue';
import AboutTextArea from "/components/abouts/about-page-com/AboutTextArea.vue";
import BoxShadowStyle from '~~/elements/elements-iconbox/BoxShadowStyle.vue';
import ElVideoMain from '~~/elements/elements-video/ElVideoMain.vue';
import SliderWithDots from '~~/elements/elements-carousel-main/SliderWithDots.vue';
import DetailsDesc from '~~/components/product-details/DetailsDesc.vue';
import AboutFaqs from '~~/components/faqs/AboutFaqs.vue';
import FaqArea from '~~/components/faqs/FaqArea.vue';
import AgencyPricing from '~~/components/pricing/AgencyPricing.vue';


useHead({
  title: "Aiways Costa Rica",
});

</script>
