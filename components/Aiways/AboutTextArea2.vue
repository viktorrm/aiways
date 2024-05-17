<template>
  <section class="about__text pt-115 pb-100">
    <div class="container">
      <div class="row">
        <div class="">
          <div class="title_div text-center pb-55">
            <br />
            ¡Claro y conciso! Así me gusta.
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <p>
            El nuevo Aiways U6 es un SUV totalmente eléctrico que combina pasión
            con innovación. Construido sobre la misma plataforma de vanguardia
            que el U5, ofrece una experiencia de conducción eléctrica suave,
            tecnología de batería potente y sistemas avanzados de asistencia al
            conductor.
          </p>
        </div>
        <div class="col-xl-6 col-lg-6">
          <p>
            Al mismo tiempo, sus líneas de estilo coupé, su rendimiento atlético
            y sus destacados diseños inspirados en el deporte le otorgan a este
            SUV un carácter único, audaz y altamente emotivo que realmente lo
            distingue.
          </p>
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
.about__text-title {
  text-align: center;
}
</style>
