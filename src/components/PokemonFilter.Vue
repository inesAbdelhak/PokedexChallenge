<template>
    <div class="pokemon-filter">
      <button class="filter-button">Filtrer</button>
    
      <div class="categories">
         <label for="sort">Trier de A à Z:</label>
      <input type="checkbox" id="sort" v-model="filters.sort">
        <label for="legendary">Légendaire:</label>
      <input type="checkbox" id="legendary" v-model="filters.legendary">
      </div>
    </div>
  </template>
  
  <script>
  export default {
  name: 'PokemonFilter',
  data() {
    return {
      filters: {
        legendary: false,
        sort: false
      }
    };
  },
  watch: {
    filters: {
      handler() {
        this.applyFilters();
      },
      deep: true
    }
  },
  methods: {
    applyFilters() {
      
      this.$emit('filters-applied', this.filters);
    }
  }
};
  </script>
  
  <style scoped>
  .pokemon-filter {
   position: absolute;
   bottom: 35px;
  }
  
  .filter-button {
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background-color: rgba(153, 240, 95, 0.725);
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
}
  

  .pokemon-filter{
    display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 500px;
  position: relative;
  
  
  }
  .arrow-icon {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #ffffff transparent transparent transparent;
    margin-right: 5px;
  }
  
  .categories {
    display: flex;
    align-items: center;
  }
  
 
  
  </style>
  