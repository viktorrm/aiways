<template>
  <LayoutOne>
    <HomeHero />
  <!--   <HomeAbout/> -->
    <AboutTextArea/>
    <BoxShadowStyle/>
     <ElVideoMain/>
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
/* mport HomeAbout from "~/components/abouts/HomeAbout.vue";
import HomeCounter from "~/components/counters/HomeCounter.vue";
import HomeServices from "~/components/services/HomeServices.vue";
import HomeEvents from "~/components/events/HomeEvents.vue";
import HomeTeams from "~/components/teams/HomeTeams.vue";
import HomeFaq from "~/components/faqs/HomeFaq.vue";
import HomePortfolio from "~/components/portfolios/HomePortfolio.vue";
import HomeTestimonial from "~/components/testimonials/HomeTestimonial.vue";
import HomeBlogs from "~/components/blogs/HomeBlogs.vue"; */
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
