<template>
  <LayoutOne>
    <HomeHero2 />
  <!--   <HomeAbout/> -->
    <AboutTextArea2/>
    <BoxShadowStyle2/>
     <!-- <ElVideoMain2/> -->
      <ElVideoMain2/>
     <!--  <AgencyPricing2/> -->
      <!-- <ElVideoMain/> -->
     <!--  <DetailsDesc/> -->
     <SliderWithDots2/>
     <AboutFaqs2/>
<FaqArea2/>
<HomeAbout2/>
<AgencyPricing/>
<EspecificacionesTec2/>
  </LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import HomeHero2 from '~~/components/Aiways/HomeHero2.vue';
import AboutTextArea2 from "/components/Aiways/AboutTextArea2.vue";
import BoxShadowStyle2 from '~~/components/Aiways/BoxShadowStyle2.vue';
/* import ElVideoMain2 from '~~/components/Aiways/ElVideoMain2.vue'; */
import SliderWithDots2 from '~~/components/Aiways/SliderWithDots2.vue';
import DetailsDesc from '~~/components/product-details/DetailsDesc.vue';
import AboutFaqs from '~~/components/faqs/AboutFaqs.vue';
import FaqArea from '~~/components/faqs/FaqArea.vue';
/* import AgencyPricing2 from '~~/components/Aiways/AgencyPricing2.vue'; */
import HomeAbout from '~/components/abouts/HomeAbout.vue';
import EspecificacionesTec2 from '~~/components/Aiways/EspecificacionesTec2.vue';

useHead({
  title: "Aiways Costa Rica",
});

</script>
