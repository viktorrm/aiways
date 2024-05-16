<template>
  <nav class="mean-nav">
    <ul>
      <template v-for="(menu, i) in menuData" :key="i">
        <li class="has-dropdown has-mega-menu">
          <nuxt-link :href="menu.link">{{ menu.title }}</nuxt-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import { ref } from "vue";
import menuData from "~~/mixins/menuData";

export default {
  name: "MobileMenus",
  mixins: [menuData],
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
<style scoped>
a {
  color: white;
}
ul li {
  color: white;
}
</style>
