<template>
  <section
    :class="`include-bg ${el_style ? 'mb-60' : ''}`"
    :style="{ backgroundImage: `url(${img1})` }"
  >
    <div class="pt-100">
      <!--       <div class="inclinado">
        <div class="inclinado_item"></div>
      </div> -->
      <div class="container right-align inclinado">
        <div class="about__btn text-black inclinado_item">
          <div class="mb-20 mt-200">Your Way. <b>Just Electric.</b></div>
          <span
            >Experience the unexpected spaciousness, the unparalleled comfort
            and versatility of the Aiways U5.</span
          >
        </div>
      </div>
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
  text-align: right;
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
.inclinado {
  background-color: white;
  position: relative;
  z-index: 2;
  bottom: 21.7vw;
  left: 30.95vw;
  transform: rotate(345deg);
  width: 41vw;
  height: 24vw;
  border-bottom-left-radius: 55px;
}

.inclinado_item {
  transform: rotate(15deg);
  margin: 8vw 2.85vw 0 3vw;
  display: flex;
  flex-wrap: wrap;
  align-content: start;
}

.inclinado_item span {
  font-size: 20px;
  text-align: left;
}

img {
  width: 100%;
  height: 800px;
}
</style>
