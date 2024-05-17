export default {
  data() {
    return {
      faq_items: [
        {
          id:"One",
          title: "¿Qué autonomía tiene la batería del Aiways U5?",
          show: true,
          desc: "El Aiways U5 cuenta con una autonomía NEDC de hasta 503 km (WLTP: 400-410 km).El estándar de pruebas WLTP se creó para obtener un perfil de consumo más realista. La autonomía real del vehículo puede variar según las condiciones diarias, ya que depende de varios factores, especialmente de la temperatura exterior, el perfil del trayecto,el estilo de conducción personal del conductor, el uso de otros dispositivos dentro del vehículo (calefacción/aire acondicionado) y el preacondicionamiento térmico.En el caso de los vehículos eléctricos, las diferencias entre los distintos modos de funcionamiento son considerables.Así, la autonomía puede ser considerablemente superior en los trayectos totalmente urbanos o en carreteras rurales, mientras que puede estar por debajo de la autonomía media WLTP en los trayectos a alta velocidad por autopista.   ",
          parent:"faqaccordion",
        },
        {
          id:"Two",
          title: "¿Puede variar el tiempo de carga de mi vehículo?",
         desc: "Aquí tienes algunos consejos sencillos para mejorar tu conducción: -Reduce tu velocidad y evita aceleraciones bruscas. -Adopta un estilo de conducción más tranquilo y suave. -Intenta mantener una velocidad constante. -Controla tu velocidad gestionando tu aceleración, incluso en pendientes descendentes. -Anticipa las frenadas para reducir la necesidad de frenar de forma abrupta. -Aprovecha el frenado regenerativo: cuando necesites detenerte, libera el pedal del acelerador para desacelerar gradualmente, y luego utiliza el pedal del freno para completar la detención a una velocidad más baja.",
          parent:"faqaccordion",
        },
        {
          id:"Three",
          title: "¿Que significa el protocolo WLTP?",
          desc: "El protocolo WLTP es un estándar global diseñado para reflejar las condiciones reales de conducción y unificar las pruebas llevadas a cabo. Su propósito es proporcionar datos precisos y comparables para todas las marcas automotrices. Este protocolo permite medir la autonomía, el consumo eléctrico, así como las emisiones de CO2 y otros contaminantes de los vehículos de combustión interna.",
          parent:"faqaccordion",
        },
        {
          id:"Four",
          title: "¿Que significa la autonomía teórica y práctica?",
          desc: "La autonomía teórica se define como la distancia que puede recorrer un vehículo eléctrico desde una carga completa hasta que la batería se descarga por completo. Este cálculo se realiza utilizando el protocolo WLTP y sirve como punto de referencia para comparar diferentes vehículos eléctricos. Es fundamental tener en cuenta que la autonomía WLTP se calcula considerando diversos factores que se acercan a las condiciones reales de conducción, aunque no pueden representarlas completamente.",
          parent:"faqaccordion",
        },
      ],
     
    };
  },
};