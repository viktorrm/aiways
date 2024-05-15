<template>
  <common-breadcrumb
    title="Have a look to our video styles"
    subtitle="Elements"
  />
  <el-video-style-one/>
  <lawyer-video :el_style="true"/>
  <architecture-video :el_style="true"/>
</template>

<script>

import LawyerVideo from '~~/components/video-area/LawyerVideo.vue';
import ElVideoStyleOne from './ElVideoStyleOne.vue';
export default {
  components: {  ElVideoStyleOne, LawyerVideo },
};
</script>
