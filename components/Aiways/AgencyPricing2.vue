<template>
  <section class="pricing__area pt-110 pb-140 p-relative z-index-1">

    <div class="container">
      
      <div class="row">
        <div class="col-xxl-12">
          <div class="section__title-wrapper-5 mb-50 text-center">
            <h3 class="section__title-5">
              Exterior expresivo, Impresionante interior.
            </h3>
          </div>
          <div class="pt-25 pb-25 text-center"> <p>En el U5, que viene completamente equipado de serie, puedes causar una gran impresión mientras disfrutas del máximo confort. Su diseño elegante pero dinámico es tanto estéticamente agradable como atemporal.

El interior presume de un estilo de diseño minimalista y materiales sofisticados. Prepárate para una variedad de opciones de iluminación, una pantalla táctil suspendida como elemento de control central y un nivel excepcional de amplitud. Gracias a la altura y el espacio para las piernas sin igual en esta clase de vehículos, el concepto de espacio interior se redefine. No es de extrañar que te sientas como en casa en tu U5 espectacularmente espacioso.</p></div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
          <div class="pricing__tab-nav tp-tab mb-50 mx-auto">
            <nav>
              <div
                class="nav nav-tabs price-tab-slide justify-content-center"
                id="nav-tab"
                role="tablist"
              >
                <label for="price-tab-check" class="nav justify-content-center">
                  <span
                    class="nav-link"
                    id="nav-monthly-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-monthly"
                    role="tab"
                    aria-controls="nav-monthly"
                    aria-selected="true"
                    >Exterior</span
                  >
                  <input type="checkbox" id="price-tab-check" />
                  <i></i>
                  <span
                    class="nav-link active"
                    id="nav-yearly-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-yearly"
                    role="tab"
                    aria-controls="nav-yearly"
                    aria-selected="false"
                    >Interior
                  </span>
                </label>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// price icon
import price_icon_1 from "~/assets/img/price/5/price-icon-1.png";
import price_icon_2 from "~/assets/img/price/5/price-icon-2.png";
import price_icon_3 from "~/assets/img/price/5/price-icon-3.png";
import SalScrollAnimationMixin from "~/mixins/SalScrollAnimationMixin";

export default {
  mixins: [SalScrollAnimationMixin],
  data() {
    return {
      pricing_data: [
        {
          id: "nav-monthly",
          pricing_items: [
            {
              icon: price_icon_1,
              price: 0,
              price_text: "free",
              text: "Perfect Plan for Starters.",
              tag: "Starter",
              feature_text: "Includes:",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support",
              ],
            },
            {
              has_popular: true,
              icon: price_icon_2,
              price: 150,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support",
                "Customer Managemet",
              ],
            },
            {
              icon: price_icon_3,
              price: 220,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "User provisioning (SCIM)",
                "Databases with rich property types",
                "Custom guest editors",
                "24 hour support",
                "Customer Managemet",
              ],
            },
          ],
        },
        {
          id: "nav-yearly",
          active: true,
          pricing_items: [
            {
              icon: price_icon_1,
              price: 0,
              price_text: "free",
              text: "Perfect Plan for Starters.",
              tag: "Starter",
              feature_text: "Includes:",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support",
              ],
            },
            {
              has_popular: true,
              icon: price_icon_2,
              price: 198,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "Full Access Library",
                "Business & Financ Analysing",
                "Exclusive Templates",
                "24 hour support",
                "Customer Managemet",
              ],
            },
            {
              icon: price_icon_3,
              price: 298,
              price_text: "month",
              text: "Collaborate Professionally.",
              tag: "Commercial",
              feature_text: "Everything in Personal Plan, plus",
              lists: [
                "User provisioning (SCIM)",
                "Databases with rich property types",
                "Custom guest editors",
                "24 hour support",
                "Customer Managemet",
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>
