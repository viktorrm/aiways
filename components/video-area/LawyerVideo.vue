<template>
  <section
    :class="`include-bg ${el_style ? 'mb-60' : ''}`"
    :style="{ backgroundImage: `url(${img1})` }"
  >
    <div class="contain">
      <div class="text-black text_in_photo">
        <div class="title_in_photo">A tu manera.<b>JSolo eléctrico.</b></div>
        <div class="desc">
          Experimenta la inesperada amplitud, el confort incomparable y la versatilidad del Aiways U5.
        </div>
      </div>
    </div>

    <div class="about__btn">
      <nuxt-link href="https://www.aiwaysu5.es/" class="tp-btn">Descubre más</nuxt-link>
    </div>
  </section>

  <section
    :class="`video__area   include-bg ${el_style ? 'mb-60' : ''}`"
    :style="{ backgroundImage: `url(${img2})` }"
    
  ><div class="desc font-text about__btn2">
         Explora el diseño desde todos los ángulos.
        </div>
     <div class="about__btn2">
      <nuxt-link href="https://www.ai-ways.eu/en/u5/" class="tp-btn">Descubre más</nuxt-link>
    </div></section>
  
</template>

<script>
import img1 from "~/assets/img/aiways/banner-1.jpg";
import img2 from "~/assets/img/aiways/360-viewer-mobile.jpg";

import VideoModal from "../common/modals/VideoModal.vue";

export default {
  props: {
    el_style: {
      type: Boolean,
      default: false,
    },
  },
  components: { VideoModal },
  data() {
    return {
      img1,
      img2,
    };
  },
  methods: {
    handleVideoPopup() {
      this.$refs.video_modal.playVideo();
    },
  },
};
</script>
<style scoped>
.include-bg {
  height: 550px;
  background-size: cover !important;
}
.right-align {
  text-align: left;
}
.about__btn {
  font-size: 35px !important;
  font-weight: 300;
  margin-bottom: 10px;
}
.about__btn2{
  margin-top: 80px;
  margin-left: 150px;
  padding: 25px;
}
.about__btn b {
  font-weight: 700;
}
.tp-btn {
  background: #00cfb4;
}
.contain {
  position: relative;
}
.text_in_photo {
  position: absolute;
  width: 43%;
  height: 359px;
  right: -15px;
  top: -98px;
  rotate: -15deg;
  border-bottom-left-radius: 50px;
  padding: 20px;
  line-height: 25px;
  background: white;
  @media screen and (max-width: 550px) {
    display: none !important;
  }
  padding: 20px;
  line-height: 25px;
  background: white;
}
.font-text{
  padding: 30px;
  font-size: 30px;
}

.title_in_photo {
  margin-top: 170px;
  margin-right: 0;
  margin-left: 20px;
  font-size: 1.9vw;
  rotate: 15deg;
}
.text_in_photo .desc {
  margin-top: 10px;
  margin-left: 8px;
  margin-right: 10%;
  font-size: 1.5vw;
  rotate: 15deg;
}
.about__btn {
  position: relative;
  top: 70%;
  left: 75%;
}
.tp-btn {
  padding: 15px 40px;
  border-radius: 5px;
}
</style>
