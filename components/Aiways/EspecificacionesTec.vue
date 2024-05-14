<template>
<div class="container">
      <div class="">
    <div class=" text-center mt-100 mb-5 "> <H1 class="centrar">Carga intuitiva y directa con el Aiways U</H1></div> 
   
    </div> 
    </div>
<!-- <div class="text-center"><img src= "/_nuxt/assets/img/carga.jpg"/> </div> -->
  <section class="faq__area pt-100 pb-25">
    
    <div class="container">
          
   <!--    <div v-if="el_style" class="row">
        <div class="col-xxl-12">
            <div class="tp-section-wrapper-3 mb-50 text-center">
              <span class="tp-section-subtitle-3">Minimal &amp; Clean Design</span>
              <h3 class="tp-section-title-3">Accordion with tab</h3>
            </div>
        </div>
      </div> -->
      <div class="row">
        <div class="col-6 img_specs"> <img src= "/_nuxt/assets/img/u5-premium.jpg"/></div>
        <div class="col-6">
            
          <div class="faq__tab-2 tp-tab mb-50">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="general-tab" data-bs-toggle="tab" data-bs-target="#general"
                  type="button" role="tab" aria-controls="general" aria-selected="true">
                  
                  
PRIME              </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="community-tab" data-bs-toggle="tab" data-bs-target="#community" type="button"
                  role="tab" aria-controls="community" aria-selected="false">
                  
                 XCITE
                </button>
              </li>
       
            </ul>
          </div>
        </div>
        
      </div>
      <div class="faq__item-wrapper">

        <div class="tab-content" id="faqTabContent">

          <div v-for="(item, i) in tab_faqs" :key="i" 
          :class="`tab-pane fade ${item.active ? 'show active' : ''}`"
            :id="item.id" role="tabpanel" :aria-labelledby="`${item.id}-tab`">
            <div v-for="(faq_item, index) in item.faq_content" :key="index" class="faq__item pb-95">
              <div class="row">
          
                <div class="col-xl-12 col-lg-9 col-md-8">
                  <div class="faq__wrapper faq__style-4 tp-accordion">
             
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
import SingleFaq from '~~/components/faqs/SingleFaq.vue';
export default {
  components: { SingleFaq },
  props:{
    el_style:{
      type:Boolean,
      default:false,
    }

  },

};
</script>
