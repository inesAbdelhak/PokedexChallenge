<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div class="pokemon-list">
  <PokemonCard v-for="(pokemon, index) in pokemons" :key="index" :pokemon="{ ...pokemon, id: index + 1 }" />
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


  methods: {
    navigateToDetailsPage(pokemon) {
  this.$router.push({ name: 'PokemonDetails', params: { id: pokemon.id } });
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



@media (max-width: 767px) {

  .pokemon-list {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }

}


</style>
