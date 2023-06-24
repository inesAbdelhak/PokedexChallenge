<template>
    <div class="pokemon-filter">
      <button class="filter-button">Filtrer</button>
      <i class="arrow-icon"></i>
      <div class="categories">
        <!-- Ajoutez vos catégories ici -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PokemonFilter',
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
  
  /* Ajoutez vos styles pour les catégories ici */
  
  </style>
  