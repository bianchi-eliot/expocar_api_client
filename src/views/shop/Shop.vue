<template>
  <h3 style="text-align: center">
    Shop
    <a class="bShowFilter" href="/#/shop#filter" @click="toggleFormFilter">
      Filters
    </a>
  </h3>
  <FilterShop id="filterElements" style="display: none"></FilterShop>
  <ElementsShop></ElementsShop>
</template>

<script>
import FilterShop from "@/components/shop/FilterShop";
import ElementsShop from "@/components/shop/ElementsShop";

export default {
  name: 'ShopView',
  components: {ElementsShop, FilterShop},
  methods: {
    toggleFormFilter() {
      const form = document.getElementById('filterElements');
      const button = document.getElementsByClassName('bShowFilter');
      if(form.style.display === 'none') {
        form.style.display = ''
        button.innerText = 'Enlever les filtres'
      } else {
        form.style.display = 'none'
        button.innerText = 'Filters'
      }
    }
  }
}
</script>

<style scoped>
  @import '@/assets/shop.css';
</style>