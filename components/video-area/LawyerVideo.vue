<template>
  <section
    :class="`include-bg ${el_style ? 'mb-60' : ''}`"
    :style="{ backgroundImage: `url(${img1})` }"
  >
    <div class="contain">
      <div class="text-black text_in_photo">
        <div class="title_in_photo">Your Way. <b>Just Electric.</b></div>
        <div class="desc">
          Experience the unexpected spaciousness, the unparalleled comfort and
          versatility of the Aiways U5.
        </div>
      </div>
    </div>
    <div class="about__btn">
      <nuxt-link href="/about" class="tp-btn">Discover Now</nuxt-link>
    </div>
  </section>

  <section
    :class="`video__area   include-bg ${el_style ? 'mb-60' : ''}`"
    :style="{ backgroundImage: `url(${img2})` }"
  ></section>
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
  width: 55%;
  height: 600px;
  right: -9%;
  top: -350px;
  rotate: -15deg;
  border-bottom-left-radius: 50px;
  @media screen and (max-width: 550px) {
    display: none !important;
  }
  padding: 20px;
  line-height: 25px;
  background: white;
}

.title_in_photo {
  margin-top: 350px;
  margin-right: 40%;
  margin-left: 20px;
  font-size: 1.9vw;
  rotate: 15deg;
}
.text_in_photo .desc {
  margin-top: 30px;
  margin-right: 40%;
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
