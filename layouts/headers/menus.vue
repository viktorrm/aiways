<template>
  <ul>
    <li
      v-for="(menu, i) in menuData"
      :key="i"
      :class="`${menu.megaMenu ? 'has-mega-menu' : ''}`"
    >
      <NuxtLink :to="menu.link">
        {{ menu.title }}
      </NuxtLink>

    </li>
  </ul>
</template>

<script>
import menuData from "~~/mixins/menuData";

export default {
  mixins: [menuData],
};
</script>
<style scoped>
.main-menu ul li a {
  color: black;
}

.main-menu ul li:hover > a::after {
  color: black !important;
}
</style>
