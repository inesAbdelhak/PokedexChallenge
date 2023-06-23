<template>
  <div>
    <div class="logo">
      <img src="./assets/pokemonlogo.png" alt="Logo" />

    </div>
    <SearchPokedex></SearchPokedex>
    <PokemonFilter @filters-updated="updateFilters" />


    
  </div>

<body>  
 <ThePokemons></ThePokemons>
</body>


</template>

<script>
import SearchPokedex from "./components/SearchPokedex.vue"
 import ThePokemons from "./components/ThePokemons.vue";

export default {
  name: 'App',
  components: {
    SearchPokedex,
    ThePokemons,
    
},
}
</script>

<style>
.logo{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25vh; 
}

img {
  max-width: 200px;
}

body {
  background-color: #F17068;
}


.pokemon-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


 
</style>
