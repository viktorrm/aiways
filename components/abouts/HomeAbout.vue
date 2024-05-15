<template>
  <section id="tpabout" class="about__area pt-120 pb-120">
    <div class="container">
      <div class="row">
        <div class=" text-center mt-100 mb-5 "> <h1 class="centrar">Conoces la aplicación de Aiways?</h1></div>
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="about__thumb-wrapper ml-70 pr-100">
            <div
              class="about__thumb w-img"
              data-sal="slide-right"
              data-sal-delay="130"
              data-sal-duration="1000"
            >
              <div class="tp-thumb-overlay wow"></div>
              <img src="~/assets/img/app.jpg" alt="" />
            </div>
           <!--  <div class="about__thumb-text">
              <h3 data-text="Expert">Expert</h3>
            </div> -->
            <!-- <div class="about__experience">
              <h4><span class="counter">12</span></h4>
              <p>
                Years <br />
                Experience
              </p>
            </div> -->
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div
            class="about__wrapper pr-95"
            data-sal="slide-up"
            data-sal-delay="170"
            data-sal-duration="1000"
          >


            <p>
              The city and town name generator uses a database of over five
              million names across more than 150 countries. If you are looking
              for a random city or town name to spark a location for a book,
              game, or a script, millions of possibilities are at your finger
              tips. How you use the city or town name is up to you.
            </p>


            <div class="about__btn">
              <nuxt-link href="https://www.plugshare.com/map/costa-rica" class="tp-btn">Ir a la página</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
};
</script>
<style scoped>
.tp-btn{
border-radius: 4px;
background: #00CFB4;
}
</style>
