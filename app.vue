<template>
  <NuxtPage> </NuxtPage>
  <whatsapp />
</template>

<script>
import whatsapp from "~/components/Aiways/whatsapp.vue";

export default {
  components: { whatsapp },
};
</script>
<style>
p {
  font-size: 20px !important;
  line-height: 1.62 !important;
  font-weight: 350;
}
.title_div {
  font-size: 48px !important;
  line-height: 60px;
  @media screen and (max-width: 750px) {
    font-size: 30px !important;
    line-height: 35px;
  }
}
</style>
