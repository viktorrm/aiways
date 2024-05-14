export default {
  data() {
    return {
      menuData: [
        {
          id: 1,
          hasDropdown: false,
          megaMenu: false,
          title: "U5",
          link: "/",
        },
        {
          id: 2,
          title: "U6",
          megaMenu: false,
          link: "about",
        },
        {
          id: 3,
          megaMenu: false,
          title: "Servicio",
          link: "/portfolio",
        },
        {
          id: 4,
          megaMenu: false,
          title: "Donde estamos",
          link: "/blog",
        },

        {
          megaMenu: false,
          id: 6,
          title: "Acerca de",
          link: "/contact",
        },
      ],
    };
  },
};
