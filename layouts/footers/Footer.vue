<template>
  <footer>
    <div class="footer__area" data-bg-color="footer-bg">
      <div class="footer__top">
        <div class="container">
          <div class="row">
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget mb-50 footer-col-1">
                <div class="footer__logo">
                  <nuxt-link href="/">
                    <img src="~/assets/img/aiways/logof.svg" alt="">
                  </nuxt-link>
                </div>
                <div class="footer__widget-content">
                  <div class="footer__info">
                    
                    <div class="footer__contact">
                      <div class="">
                        <span><a href="tel:"><i class="fa-solid fa-phone"></i> +506 6033 2277</a></span>
                      </div>
                      <div class="footer__contact-mail">
                        <span><a >electroautoscr@gmail.com</a></span>
                      </div>
                    </div>
                    <div class="footer__social">
                      <social/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer__widget mb-50 footer-col-2">
                <h3 class="footer__widget-title">Quick Link</h3>
                <div class="footer__widget-content">
                  <ul>
                    <li><nuxt-link href="/">U5</nuxt-link></li>
                    <li><nuxt-link href="/U6">U6</nuxt-link></li>
                    <li><nuxt-link href="/servicio">Servicio</nuxt-link></li>
                    <li><a href="DondeEstamos">Donde estamos</a></li>
                    <li><nuxt-link href="/AcercaDe">Acerca de</nuxt-link></li>
                 
                  </ul>
                </div>
              </div>
            </div>
      
          
          </div>
        </div>
      </div>
 
    </div>
  </footer>
  <!-- image popup start -->
   <image-popup ref="image_popup" :images="qrcodeImg" />
  <!-- image popup end -->
</template>

<script>
import ImagePopup from '~~/components/common/modals/ImagePopup.vue';
import Social from '~~/components/social/Social.vue';
import qrcode from '~/assets/img/icon/qrcode.png';

export default {
  components: { Social, ImagePopup },
  data () {
    return {
      qrcodeImg:[qrcode]
    }
  },
  methods:{
    handleImagePopup(index){
      this.$refs.image_popup.showImg(index);
    }
  },
  }
</script>

<style scoped>
.footer__top{
  background-color: #ffffff ;
  
}
</style>

