<template>
  <div>
    <!-- If loading is in progress, displays "Loading..." -->
    <div v-if="loading">Loading...</div>
    <div v-else>
      <!-- Otherwise displays Pokémon list -->
      <div class="pokemon-list">
        <!-- For each Pokemon in "pokemons", create a PokemonCard -->
  <PokemonCard v-for="(pokemon, index) in pokemons" :key="index" :pokemon="{ ...pokemon, id: index + 1 }" />
</div>

    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
import PokemonCard from './PokemonCard.vue';
import { router } from 'vue-router';

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
        // Performs a request to obtain Pokémon data from the API
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25');
        const data = await response.json();
        //For each Pokémon, perform a query to obtain the Pokémon's specific details
        const promises = data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          
          return {
            name: pokemon.name,
            imageUrl: data.sprites.front_default,
          };
        });
        // Waits for all requests to finish and updates the Pokémon list
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


  methods: {
    // How to navigate to a Pokémon's details page
    navigateToDetailsPage(pokemon) {
  router.push({ name: 'PokemonDetails', params: { id: pokemon.id } });
}
  }



};
</script>

<style scoped>
.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}





</style>
