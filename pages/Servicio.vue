<template>
  <LayoutOne>
   
<ElementsHeadingMain/>
    <servicioheader/>
    <BoxStyle3/>
    <Pumpapp/>
<UnderlineAccordion/>
</LayoutOne>
</template>

<script setup>
import LayoutOne from '~/layouts/LayoutOne.vue';
import UnderlineAccordion from '~~/elements/elements-accordion/UnderlineAccordion.vue'
import ElementsHeadingMain from '~~/elements/elements-heading/ElementsHeadingMain.vue'
import servicioheader from "~~/components/Aiways/servicioheader.vue";
import BoxStyle3 from '~~/components/Aiways/BoxStyle3.vue';
import Pumpapp from '~~/components/Aiways/Pumpapp.vue';
import ElementsHeadingMainVue from '~~/elements/elements-heading/ElementsHeadingMain.vue';

useHead({
  title: "Aiways Costa Rica",
});

</script>
