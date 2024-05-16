<template>
  <section
    :class="`include-bg ${el_style ? 'mb-60' : ''}`"
    :style="{ backgroundImage: `url(${img1})` }"
  >
    <div class="contain">
      <div class="text-black text_in_photo">
        <div class="title_in_photo">A tu manera.<b>JSolo eléctrico.</b></div>
        <div class="desc">
          Experimenta la inesperada amplitud, el confort incomparable y la
          versatilidad del Aiways U5.
        </div>
      </div>
    </div>
    <div class="contain">
      <div class="text-black text_in_photo_2">
        <div class="title_in_photo2">A tu manera.<b>JSolo eléctrico.</b></div>
        <div class="desc2">
          Experimenta la inesperada amplitud, el confort incomparable y la
          versatilidad del Aiways U5.
        </div>
      </div>
    </div>
    <div class="about__btn">
      <nuxt-link href="https://www.aiwaysu5.es/" class="tp-btn"
        >Descubre más</nuxt-link
      >
    </div>
  </section>

  <section
    :class="`video__area   include-bg ${el_style ? 'mb-60' : ''}`"
    :style="{ backgroundImage: `url(${img2})` }"
  >
    <div class="font-text title_in_photo3">
      Explora el diseño desde todos los ángulos.
    </div>
    <div class="about__btn2">
      <nuxt-link href="https://www.ai-ways.eu/en/u5/" class="tp-btn"
        >Descubre más</nuxt-link
      >
    </div>
  </section>
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
  background-size: cover;
}

.right-align {
  text-align: left;
}

.about__btn {
  font-size: 35px !important;
  font-weight: 300;
  margin-bottom: 10px;
}

.about__btn2 {
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
  height: 300px;
}

.text_in_photo {
  position: absolute;
  width: 43%;
  height: 400px;
  right: -15px;
  top: -50%;
  rotate: -15deg;
  border-bottom-left-radius: 50px;
  padding: 20px;
  background: white;
  @media screen and (max-width: 750px) {
    display: none !important;
  }
  padding: 20px;
  line-height: 25px;
  background: white;
}

.text_in_photo_2 {
  position: relative;
  width: 110%;
  height: 155px;
  right: 6px;
  top: -120%;
  rotate: -8deg;
  border-bottom-left-radius: 20px;
  padding: 20px;
  background: green;
  text-align: center;
  padding: 20px;
  line-height: 25px;
  background: white;
  @media screen and (min-width: 750px) {
    display: none !important;
  }
}

.font-text {
  padding: 30px;
  font-size: 30px;
}

.title_in_photo {
  margin-top: 200px;
  margin-right: 0;
  margin-left: 20px;
  font-size: 1.9vw;
  rotate: 15deg;
}
.text_in_photo .desc {
  margin-top: 20px;
  margin-left: 1px;
  margin-right: 10%;
  font-size: 1.5vw;
  rotate: 15deg;
  line-height: 32px;
}

.title_in_photo2 {
  rotate: 8deg;
  @media screen and (max-width: 750px) {
    font-size: 6vw;
  }
}

.text_in_photo_2 .desc2 {
  text-align: left !important;
  margin-left: 1px;
  rotate: 8deg !important;
  margin-top: 30px;
  @media screen and (max-width: 750px) {
    font-size: 4vw;
  }
}

.about__btn {
  position: absolute;
  bottom: 10%;
  right: 15vw;
  @media screen and (max-width: 550px) {
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.tp-btn {
  padding: 15px 40px;
  border-radius: 5px;
  @media screen and (max-width: 550px) {
    padding: 15px 22px;
  }
}

.include-bg {
  position: relative;
}

.about__btn2 {
  position: absolute;
  bottom: 50%;
  @media screen and (max-width: 750px) {
    left: -8%;
    bottom: 7%;
  }
}
.title_in_photo3 {
  padding-top: 5%;
}
</style>
