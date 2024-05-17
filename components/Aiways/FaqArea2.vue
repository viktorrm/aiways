<template>
  <div class="container">
    <div class="">
      <div class="text-center mt-100 mb-5 title_div">
        Carga intuitiva y directa con el Aiways 
      </div>
      <div class="pt-25 pb-25 text-center">
        <p>
          Ya sea que solo viajes distancias cortas diariamente o que emprendas
          regularmente largos trayectos, el Aiways U5 tiene la solución de carga
          perfecta para cada escenario. Pronto notarás que la carga "lenta" de
          corriente alterna (CA) generalmente es perfectamente adecuada; sin
          embargo, el Aiways U5 también ofrece carga ultrarrápida de corriente
          continua (CC), con hasta 90 kW, en estaciones Hypercharger.
        </p>
      </div>
    </div>
  </div>
  <div class="text-center container"><video
        class="video w-100"
        id="video"
        :src="srcVideo"
        ref="video"
        width="800"
        height="400"
        autoplay
        loop
        muted
        style="object-fit: cover"
      ></video></div>
  <section class="faq__area pt-100 pb-25">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="faq__tab-2 tp-tab mb-50">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li
                class="nav-item"
                role="presentation"
                v-for="(item, i) in infoCarga2"
                :key="i"
              >
                <button
                  :class="`nav-link ${
                    indexSelected === i ? 'active' : 'non_active'
                  }`"
                  :id="`${item.id}-tab`"
                  data-bs-toggle="tab"
                  :data-bs-target="`#${item.id}`"
                  type="button"
                  role="tab"
                  aria-controls="general"
                  aria-selected="true"
                  @click="selectTab(item)"
                >
                  <span>
                    <img :src="item.ico" />
                  </span>
                  {{ item.id }}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="desc">{{ selectedTab.desc }}</div>
    </div>
  </section>
</template>

<script>
import SingleFaq from "./SingleFaq2.vue";
import { infoCarga2 } from "~~/mixins/infoCarga2.js";
import srcVideo from "~/assets/img/aiways/u6-charging.mp4"
export default {
  components: { SingleFaq },
  props: {
    el_style: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    selectTab(item) {
      this.selectedTab = item;
      this.indexSelected = item.active;
    },
  },
  data() {
    return {
      indexSelected: 0,
      selectedTab: { ...infoCarga2[0] },
      infoCarga2,
      srcVideo: srcVideo,
    };
  },
};
</script>
<style scoped>
.desc {
  background-color: #f5f5f5;
  font-size: 20px;
  padding: 20px;
  line-height: 1.5;
}

.faq__tab-2 .nav-link.active {
  background-color: #ffffff;
  color: #00cfb4;
}
.faq__tab-2 .nav-link::after {
  background-color: #00cfb4;
  color: #00cfb4;
}

.non_active {
  filter: grayscale(1);
}
</style>
