<template>
  <nav class="mean-nav">
    <ul>
      <template v-for="(menu, i) in menuData" :key="i">
        <li
          v-if="menu.hasDropdown && !menu.megaMenu && !menu.pages"
          class="has-dropdown"
        >
          <nuxt-link :href="menu.link">{{ menu.title }}</nuxt-link>
          <ul
            class="submenu"
            :style="{ display: navTitle === menu.title ? 'block' : 'none' }"
          >
            <li v-for="(sub, i) in menu.submenus" :key="i">
              <nuxt-link :href="sub.link">{{ sub.title }}</nuxt-link>
            </li>
          </ul>
          <a
            :class="`mean-expand ${
              navTitle === menu.title ? 'mean-clicked' : ''
            }`"
            @click.prevent="openMobileMenu(menu.title)"
            style="font-size: 18px; cursor: pointer"
          >
            <i class="fal fa-plus"></i>
          </a>
        </li>

        <li
          v-if="menu.megaMenu && !menu.pages"
          class="has-dropdown has-mega-menu"
        >
          <nuxt-link :href="menu.link">{{ menu.title }}</nuxt-link>
          <ul
            class="mega-menu"
            :style="{ display: navTitle === menu.title ? 'block' : 'none' }"
          >
            <li v-for="(mega_m, i) in menu.mega_menus" :key="i">
              <nuxt-link class="mega-menu-title" :href="mega_m.link">
                {{ mega_m.title }}
              </nuxt-link>
              <ul
                :style="{
                  display: subMenu === mega_m.title ? 'block' : 'none',
                }"
              >
                <li v-for="(sub_m, i) in mega_m.submenus" :key="i">
                  <nuxt-link :href="sub_m.link">{{ sub_m.title }}</nuxt-link>
                </li>
              </ul>
              <a
                :class="`mean-expand ${
                  subMenu === mega_m.title ? 'mean-clicked' : ''
                }`"
                @click.prevent="openSubMobileMenu(mega_m.title)"
                style="font-size: 18px; cursor: pointer"
              >
                <i class="fal fa-plus"></i>
              </a>
            </li>
          </ul>
          <a
            :class="`mean-expand ${
              navTitle === menu.title ? 'mean-clicked' : ''
            }`"
            @click.prevent="openMobileMenu(menu.title)"
            style="font-size: 18px; cursor: pointer"
          >
            <i class="fal fa-plus"></i>
          </a>
        </li>

        <li v-if="menu.pages" class="has-dropdown has-mega-menu">
          <nuxt-link :href="menu.link">{{ menu.title }}</nuxt-link>
          <ul
            class="mega-menu"
            :style="{ display: navTitle === menu.title ? 'block' : 'none' }"
          >
            <li v-for="(mega_m, i) in menu.mega_menus" :key="i">
              <nuxt-link :href="mega_m.link" class="mega-menu-title">
                {{ mega_m.title }}
              </nuxt-link>
              <ul
                :style="{
                  display: subMenu === mega_m.title ? 'block' : 'none',
                }"
              >
                <li v-for="(sub_m, i) in mega_m.submenus" :key="i">
                  <nuxt-link :href="sub_m.link">{{ sub_m.title }}</nuxt-link>
                </li>
              </ul>
              <a
                :class="`mean-expand ${
                  subMenu === mega_m.title ? 'mean-clicked' : ''
                }`"
                @click.prevent="openSubMobileMenu(mega_m.title)"
                style="font-size: 18px; cursor: pointer"
              >
                <i class="fal fa-plus"></i>
              </a>
            </li>
          </ul>
          <a
            :class="`mean-expand ${
              navTitle === menu.title ? 'mean-clicked' : ''
            }`"
            @click.prevent="openMobileMenu(menu.title)"
            style="font-size: 18px; cursor: pointer"
          >
            <i class="fal fa-plus"></i>
          </a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import { ref } from "vue";
// import menuData from "~~/mixins/menuData";

export default {
  name: "MobileMenus",
  // mixins: [menuData],
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

  setup() {
    const navTitle = ref("");
    const subMenu = ref("");

    const openMobileMenu = (menu) => {
      navTitle.value = navTitle.value === menu ? "" : menu;
    };

    const openSubMobileMenu = (s_menu) => {
      subMenu.value = subMenu.value === s_menu ? "" : s_menu;
    };

    return {
      navTitle,
      subMenu,
      openMobileMenu,
      openSubMobileMenu,
    };
  },
};
</script>
