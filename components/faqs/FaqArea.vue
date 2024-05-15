<template>
  <div class="container">
    <div class="">
      <div class="text-center mt-100 mb-5">
        <H1 class="centrar">Carga intuitiva y directa con el Aiways U</H1>
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
  <div class="text-center"><img src="/_nuxt/assets/img/carga.jpg" /></div>
  <section class="faq__area pt-100 pb-25">
    <div class="container">
      <div class="row">
        <div class="col-xxl-12">
          <div class="faq__tab-2 tp-tab mb-50">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="general-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#general"
                  type="button"
                  role="tab"
                  aria-controls="general"
                  aria-selected="true"
                >
                  <span>
                    <img src="/_nuxt/assets/img/iconos/icono1.png" />
                  </span>
                  Carga diaria
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="community-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#community"
                  type="button"
                  role="tab"
                  aria-controls="community"
                  aria-selected="false"
                >
                  <span>
                    <img src="/_nuxt/assets/img/iconos/charging-icon-1.png" />
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                  </span>
                  Carga de largo alcance
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="support-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#support"
                  type="button"
                  role="tab"
                  aria-controls="support"
                  aria-selected="false"
                >
                  <span>
                    <img src="/_nuxt/assets/img/iconos/icono3.png" />
                  </span>
                  Costos de carga
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="faq__item-wrapper">
        <div class="tab-content" id="faqTabContent">
          <div
            v-for="(item, i) in tab_faqs"
            :key="i"
            :class="`tab-pane fade ${item.active ? 'show active' : ''}`"
            :id="item.id"
            role="tabpanel"
            :aria-labelledby="`${item.id}-tab`"
          >
            <div
              v-for="(faq_item, index) in item.faq_content"
              :key="index"
              class="faq__item pb-95"
            >
              <div class="row">
                <div class="col-xl-12 col-lg-9 col-md-8">
                  <div class="faq__wrapper faq__style-4 tp-accordion">
                    <div
                      class="accordion"
                      :id="`${faq_item.id}-${index + 1}_accordion`"
                    >
                      <single-faq
                        v-for="(faq, i) in faq_item.accordions"
                        :key="i"
                        :item="faq"
                      />
                    </div>
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
import SingleFaq from "./SingleFaq.vue";
export default {
  components: { SingleFaq },
  props: {
    el_style: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      tab_faqs: [
        {
          id: "Carga diaria",
          active: true,
          faq_content: [
            {
              accordions: [
                {
                  id: "One",

                  show: true,
                  desc: "Carga convenientemente tu Aiways U5 a través de tu suministro de electricidad doméstica. Ya sea en casa, en la oficina o de vacaciones, puedes cargar tu Aiways U5 en todos los enchufes estándar de corriente doméstica de 230V gracias al cable de carga ICCB. Recomendamos que consultes con tu electricista para verificar que el suministro eléctrico de tu hogar pueda manejar la carga sin problemas.Simplemente conecta el vehículo al suministro eléctrico durante la noche, como haces con tu teléfono, y ponte al volante de tu Aiways U5 completamente cargado por la mañana.Si no puedes cargar tu vehículo en casa o en la oficina, Aiways ofrece acceso a una completa red global de estaciones de carga. Por ejemplo, podrías cargar tu U5 mientras haces compras, comes fuera o realizas otras actividades diarias. Una opción aún más conveniente es cargar tu Aiways U5 durante la noche con un Wallbox de hasta 11 kW¹. Simplemente conecta tu vehículo al Wallbox usando el cable de carga Mode 3 para estaciones de carga de CA (cable suministrado como estándar). Este cable también te permite usar una amplia gama de estaciones de carga públicas. Dependiendo del proveedor de electricidad, la potencia disponible en las estaciones de carga públicas puede variar. ¹ Potencia máxima de carga en 3 fases, 16A.  ",
                  parent: "general-1_accordion",
                },
              ],
            },
          ],
        },

        {
          id: "Carga diaria",
          active: true,
          faq_content: [
            {
              accordions: [
                {
                  id: "One",

                  show: true,
                  desc: "El Aiways U5 está perfectamente equipado para viajes espontáneos de larga distancia. En cuanto a la carga pública, Aiways brinda a sus clientes acceso a una red de casi 500,000 estaciones de carga en todo el mundo.Esta red también incluye numerosas estaciones de carga de alta potencia (CC) en rutas de transporte principales y en otros lugares (por ejemplo, supermercados, restaurantes) en toda Europa. Con una potencia de carga máxima de hasta 90 kW, el Aiways U5 puede, por ejemplo, cargarse del 20% al 80% en 35 minutos, restaurando así su energía a niveles suficientes. Por lo tanto, las pausas para cargar en viajes de larga distancia en tu Aiways U5 son incluso más cortas que un descanso para tomar café, que de todos modos deberías tomar.Una opción es planificar el viaje de larga distancia de la misma manera que lo harías con un vehículo de motor de combustión. Hay muchas estaciones de carga de alta velocidad disponibles, lo que significa que simplemente puedes detenerte en la próxima cuando quieras cargar el auto o tomar un descanso.Alternativamente, puedes conectar tu teléfono inteligente con la pantalla de información de 12.3 y planificar tu viaje con anticipación utilizando aplicaciones como 'PUMP'.Benefíciate de información en tiempo real sobre estaciones de carga individuales, como su ubicación precisa, número de tomas y estado de disponibilidad. Ahora es posible planificar tu viaje sin tener que preocuparte nunca por una batería descargada.",
                  parent: "general-1_accordion",
                },
              ],
            },
          ],
        },
        {
          id: "Carga diaria",
          active: true,
          faq_content: [
            {
              accordions: [
                {
                  id: "One",

                  show: true,
                  desc: "Aunque ya no tendrás que preocuparte por el precio de la gasolina, una pregunta aún queda: ¿cuánto cuesta cargar completamente el auto?Aiways deja la elección del proveedor de electricidad en tus manos. Como tal, eres libre de cargar con tu proveedor preferido, de la misma manera en que puedes elegir tu estación de servicio de gasolina. Esto te permite seleccionar la opción más conveniente.",
                  parent: "general-1_accordion",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
