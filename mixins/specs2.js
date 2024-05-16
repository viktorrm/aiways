import spec1 from "~/assets/img/aiways/carsSpecs/u5/spec1.jpg";
import spec2 from "~/assets/img/aiways/carsSpecs/u5/spec2.jpg";
import exteriorruedas from "~/assets/img/aiways/carsSpecs/u5/exteriorruedas.jpg";
import exteriortecho from "~/assets/img/aiways/carsSpecs/u5/exteriortecho.jpg";
import exteriorpuerta from "~/assets/img/aiways/carsSpecs/u5/exteriorpuerta.jpg";

import srcVideo from "~/assets/img/aiways/videou6.mp4";

export const specs = {
  interior: [
    {
      title: "Asientos comfortables",
      desc: {
        titulo: "Seguro y cómodo",
        desc: "Todos los pasajeros en la versión PRIME del U5 se sientan en una combinación de cuero/imitación de cuero que asegura un soporte estable desde todos los lados. El conductor puede esperar un asiento ajustable en seis direcciones (cuatro direcciones en el caso del asiento del pasajero delantero), sin mencionar un soporte lumbar ajustable electrónicamente en dos direcciones. Los reposabrazos centrales acolchados proporcionan aún más comodidad, tanto en la parte delantera como en la trasera. Los asientos traseros se pueden plegar en una división de 60 : 40. Al elevar el piso de carga, es posible crear un compartimento plano con una capacidad de 1,543 litros. Y con las unidades de sujeción de sillas de auto I-SIZE, el U5 ofrece seguridad adicional para los más pequeños.",
      },
      // img: interiorasientos,
      video: srcVideo,
    },
  ],

  exterior: [
    {
      title: "Diseño",
      desc: {
        titulo: "La prueba de que lo grande puede ser hermoso.",
        desc: "Con 4.68 metros de largo, 1.87 metros de ancho y 1.7 metros de alto, este automóvil de cinco puertas no solo es un festín para los ojos debido a su tamaño imponente y su silueta aerodinámica, sino también gracias a detalles sofisticados como los tiradores de las puertas empotrados y un alerón aerodinámico, ambos diseñados para reducir la resistencia al aire. Además, el conector de carga debajo del faro izquierdo no solo es fácilmente accesible, sino que también está excepcionalmente bien oculto.",
      },
      img: spec1,
    },
    {
      title: "Luces delanteras y traseras",
      desc: {
        titulo: "Luz en el centro de atención",
        desc: "Los faros LED con forma de L y las luces traseras LED, que están integradas en toda la parte trasera, son atractivos por sí mismos. Gracias a su diseño único de múltiples capas, se integran perfectamente en el exterior del vehículo.",
      },
      img: spec2,
    },
    {
      title: "Llantas",
      desc: {
        titulo: "Llantas de aleación",
        desc: 'En la configuración XCITE, las llantas de aleación de 17" llenan el espacio entre el automóvil y la carretera; la versión PRIME cuenta con llantas de aleación de dos tonos de 19" con neumáticos optimizados aerodinámicamente.',
      },
      img: exteriorruedas,
    },
    {
      title: "Techo",
      desc: {
        titulo: "Techo y rieles",
        desc: "Gracias a los rieles de techo integrados, el automóvil puede llevar hasta 75 kg de equipaje adicional. Los rieles vienen en negro o combinan con el color de la pintura del automóvil. Además, los alerones dobles en el techo garantizan una aerodinámica óptima, además de una apariencia aerodinámica.",
      },
      img: exteriortecho,
    },
    {
      title: "Maletero",
      desc: {
        titulo: "Apertura sin contacto",
        desc: "En la versión PRIME, la tapa del maletero eléctrico se abre con solo pulsar un botón; incluso es sin contacto y se puede activar con un simple movimiento del pie debajo del parachoques trasero. Como no hay umbral de carga, cargar/descargar es más fácil y sencillo que nunca.",
      },
      img: exteriorpuerta,
    },
  ],
};
