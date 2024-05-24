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
  <section class="faq__area pt-100 pb-25">
    <div class="container">
      <div class="text-center">
        <img class="w-100" src="~/assets/img/carga.jpg" />
      </div>
      <div class="row">
        <div class="col-xxl-12">
          <div class="faq__tab-2 tp-tab mb-50">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li
                class="nav-item"
                role="presentation"
                v-for="(item, i) in infoCarga"
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
import SingleFaq from "./SingleFaq.vue";
import { infoCarga } from "~~/mixins/infoCarga.js";
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
      selectedTab: { ...infoCarga[0] },
      infoCarga,
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
