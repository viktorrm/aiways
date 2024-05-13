<template>
  <ul>
    <li
      v-for="(menu, i) in menuData"
      :key="i"
      :class="`has-dropdown ${menu.megaMenu ? 'has-mega-menu' : ''}`"
    >
      <NuxtLink :to="menu.link">
        {{ menu.title }}
      </NuxtLink>
      <ul v-if="menu.hasDropdown" class="submenu">
        <li v-for="(sub, i) in menu.submenus" :key="i">
          <NuxtLink :to="sub.link">
            {{ sub.title }}
          </NuxtLink>
        </li>
      </ul>
      <ul v-if="menu.mega_menus" class="mega-menu">
        <li v-for="(mega, i) in menu.mega_menus" :key="i">
          <NuxtLink :to="mega.link" class="mega-menu-title">
            {{ mega.title }}
          </NuxtLink>
          <ul>
            <li v-for="(sub_mega, i) in mega.submenus" :key="i">
              <NuxtLink :to="sub_mega.link">
                {{ sub_mega.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
// import menuData from "~~/mixins/menuData";

export default {
  data() {
    return {
      menuData: [
        {
          id: 1,
          hasDropdown: true,
          title: "Portfolio",
          link: "/portfolio",
          submenus: [
            { title: "Classic Style", link: "/portfolio" },
            { title: "Grid 3 Columns", link: "/portfolio-2" },
            // { title: "Gallery Style", link: "/portfolio-gallery" },
            { title: "Masonry Full", link: "/portfolio-masonry" },
            { title: "Metro Style", link: "/portfolio-metro" },
            { title: "Slider Style", link: "/portfolio-slider" },
            { title: "Classic Details", link: "/portfolio-details" },
            { title: "List With Details", link: "/portfolio-details-list" },
            { title: "Slider with Details", link: "/portfolio-details-slider" },
            { title: "Video With Details", link: "/portfolio-details-video" },
          ],
        },
        {
          id: 2,
          hasDropdown: true,
          title: "Portfolio",
          link: "/portfolio",
          submenus: [
            { title: "Classic Style", link: "/portfolio" },
            { title: "Grid 3 Columns", link: "/portfolio-2" },
            // { title: "Gallery Style", link: "/portfolio-gallery" },
            { title: "Masonry Full", link: "/portfolio-masonry" },
            { title: "Metro Style", link: "/portfolio-metro" },
            { title: "Slider Style", link: "/portfolio-slider" },
            { title: "Classic Details", link: "/portfolio-details" },
            { title: "List With Details", link: "/portfolio-details-list" },
            { title: "Slider with Details", link: "/portfolio-details-slider" },
            { title: "Video With Details", link: "/portfolio-details-video" },
          ],
        },
        {
          id: 3,
          hasDropdown: true,
          title: "Portfolio",
          link: "/portfolio",
          submenus: [
            { title: "Classic Style", link: "/portfolio" },
            { title: "Grid 3 Columns", link: "/portfolio-2" },
            // { title: "Gallery Style", link: "/portfolio-gallery" },
            { title: "Masonry Full", link: "/portfolio-masonry" },
            { title: "Metro Style", link: "/portfolio-metro" },
            { title: "Slider Style", link: "/portfolio-slider" },
            { title: "Classic Details", link: "/portfolio-details" },
            { title: "List With Details", link: "/portfolio-details-list" },
            { title: "Slider with Details", link: "/portfolio-details-slider" },
            { title: "Video With Details", link: "/portfolio-details-video" },
          ],
        },
      ],
    };
  },
  // mixins: [],
};
</script>
