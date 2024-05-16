<template>
  <!-- Map Black area start -->
  <section class="contact__M pt-110 pb-120">
    <div class="row gx-0">
      <div class="col-xl-12">
        <div class="contact__map-wrapper contact__map-height">
          <GoogleMap
            id="googleMap"
            api-key="AIzaSyAuHCYcS-YkZbBgEPDBVOwpWsaDltPfzdU"
            style="width: 100%; height: 500px"
            :center="{ lat: 9.9189321, lng: -84.047378 }"
            :zoom="14"
          >
            <InfoWindow
              class="text-center"
              :key="index"
              v-for="(m, index) in markers"
              :options="m"
              :opened="infowindowOpen"
            >
              <img
                src="~/assets/img/logo/aiways-logo.svg"
                alt=""
                class="w-100"
              />
              <div class="pt-3">
                <a target="_blank" :href="m.url">Abrir en google maps</a>
              </div>
            </InfoWindow>
            <Marker
              :key="index"
              v-for="(m, index) in markers"
              :options="m"
              class="marker"
            >
              <InfoWindow :options="m" :opened="infowindowOpen">
                <img
                  src="~/assets/img/logo/aiways-logo.svg"
                  alt=""
                  class="w-100"
                />
                <div class="pt-3">
                  <a :href="m.url" target="_blank">Abrir en google maps</a>
                </div>
              </InfoWindow></Marker
            >
          </GoogleMap>
        </div>
      </div>
    </div>
  </section>
  <!-- Map Black area end -->
</template>
<script>
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

export default {
  data() {
    return {
      markers: [
        {
          position: { lat: 9.9189321, lng: -84.047378 },
          url: `https://www.google.com/maps/place/Electroautos+Costa+Rica/@9.9189321,-84.0499583,17z/data=!3m1!4b1!4m6!3m5!1s0x8fa0e32ef5fc2263:0xd127f7159d876e85!8m2!3d9.9189268!4d-84.047378!16s%2Fg%2F11s3dk5808?entry=ttu`,
        },
      ],
    };
  },
  components: { GoogleMap, Marker, InfoWindow },
};
</script>
<style scoped>
a:hover {
  color: blue;
}

.info-window {
  background-color: #aaa4e0;
}
</style>
