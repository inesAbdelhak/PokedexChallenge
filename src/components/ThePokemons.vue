<template>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div class="pokemon-list">
          <PokemonCard v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { reactive, toRefs, onMounted } from 'vue';
  import PokemonCard from './PokemonCard.vue';
  
  export default {
    name: 'ThePokemons',
    components: {
      PokemonCard
    },
    setup() {
      const state = reactive({
        pokemons: [],
        loading: true,
        error: null,
      });
  
      onMounted(async () => {
        try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25');
          const data = await response.json();
          const promises = data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const data = await response.json();
            return {
              name: pokemon.name,
              imageUrl: data.sprites.front_default,
            };
          });
          state.pokemons = await Promise.all(promises);
          state.loading = false;
        } catch (error) {
          state.error = error;
          state.loading = false;
        }
      });
  
      return {
        ...toRefs(state),
      };
    },
  };
  </script>
  
  <style scoped>
  .pokemon-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  </style>
  