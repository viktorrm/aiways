<template>
  <LayoutOne>
    <!-- <HomeHero /> -->
    <ElementsMapMain/>

</LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import HomeHero from '~/components/hero-banner/HomeHero.vue';
import HomeAbout from '~/components/abouts/HomeAbout.vue';
import ElementsMapMain from '~~/elements/elements-map/ElementsMapMain.vue'

useHead({
  title: "Aiways Costa Rica",
});

</script>
