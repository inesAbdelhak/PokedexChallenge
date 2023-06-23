<template>
    <div class="pokemon-filter">
      <h3>Filtres :</h3>
      <label for="filter-legendaire">Légendaire</label>
      <input id="filter-legendaire" type="checkbox" v-model="filterLegendaire" @change="applyFilters" />
      <label for="filter-eau">Eau</label>
      <input id="filter-eau" type="checkbox" v-model="filterEau" @change="applyFilters" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'PokemonFilter',
    data() {
      return {
        filterLegendaire: false,
        filterEau: false,
      };
    },
    methods: {
      applyFilters() {
        this.$emit('filters-updated', {
          legendaire: this.filterLegendaire,
          eau: this.filterEau,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .pokemon-filter {
    margin-bottom: 20px;
  }
  </style>
  