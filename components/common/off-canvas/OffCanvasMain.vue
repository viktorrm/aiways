<template>
  <div
    :class="`offcanvas__full ${isOffCanvasOpen ? 'offcanvas-full-opened' : ''}`"
  >
    <div
      class="offcanvas__full-wrapper d-flex flex-column justify-content-between"
    >
      <div class="offcanvas__full-inner">
        <div class="offcanvas__close">
          <button
            @click="closeOffcanvas"
            class="offcanvas__full-close-btn offcanvas-close-btn"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="1">
                <path
                  d="M31 1L1 31"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 1L31 31"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
        <div class="offcanvas__full-content">
          <div
            class="mobile-menu fix mb-40 menu-counter d-md-none mean-container"
          >
            <div class="mean-bar">
              <!-- MobileMenus start -->
              <mobile-menus />
              <!-- MobileMenus end -->
            </div>
          </div>

          <div class="offcanvas__full-menu menu-counter d-none d-md-block">
            <nav>
              <ul>
               
                <li><nuxt-link href="/">U5</nuxt-link></li>
                <li><nuxt-link href="/u6">U6</nuxt-link></li>
                <li><nuxt-link href="/servicio">Servicio</nuxt-link></li>
                <li>
                  <nuxt-link href="/DondeEstamos">Donde Estamos</nuxt-link>
                </li>
                <li><nuxt-link href="/AcercaDe">Acerca de</nuxt-link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="offcanvas__full-footer">
        <div class="row align-items-center">
          <div class="col-xl-3">
            
          </div>
          <div class="col-xl-9 order-first order-xl-last">
            <div
              class="offcanvas__full-right d-lg-flex justify-content-xl-end align-items-center"
            >
              <div
                class="offcanvas__info d-flex flex-wrap justify-content-lg-end align-items-center"
              >
                <div class="offcanvas__info-item">
                  <h4 class="offcanvas__info-item-title">Información</h4>
                  <p> +506 6033 22 77</p>
                  <p>
                    <a >electroautoscr@gmail.com</a>
                  </p>
                </div>
                <div class="offcanvas__info-item">
                  <h4 class="offcanvas__info-item-title">Dirección</h4>
                  <p>
                    <a
                
                      >Frente a Multiplaza del Este, <br />
                      Curridabat. Metro Plaza local #9</a
                    >
                  </p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>

import MobileMenus from "./MobileMenus.vue";

export default {
  components: { MobileMenus,  },
  data() {
    return {
      isOffCanvasOpen: false,
    };
  },
  methods: {
    openOffcanvas() {
      this.isOffCanvasOpen = true;
    },
    closeOffcanvas() {
      this.isOffCanvasOpen = false;
    },
  },
};
</script>
