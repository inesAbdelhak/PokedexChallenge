<template>
  <div class="search-container">
    <form @submit.prevent="searchPokemon">
      <input v-model="searchKey" type="text" placeholder="Chercher un Pokémon" />
      <button type="submit" class="search-button">
        <font-awesome-icon icon="search" />
      </button>
    </form>
    <div v-if="pokemonData">
      <img :src="pokemonData.imageUrl" :alt="pokemonData.name" />
      <h3>{{ pokemonData.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPokedex',
  data() {
    return {
      pokemonData: null,
      searchKey: '',
    };
  },
  methods: {
    async searchPokemon() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.searchKey.toLowerCase()}`);
        const pokemon = await response.json();
        this.pokemonData = {
          name: pokemon.name,
          imageUrl: pokemon.sprites.front_default,
        };
        console.log(pokemon);
      } catch (error) {
        this.pokemonData = null;
        alert(' Désolé le Pokemon est introuvable');
      }
    },
  },
};
</script>

<style scoped>
.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
}

input[type="text"] {
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
}

.search-button {
  padding: 10px 20px;
  background-color: rgba(243, 239, 10, 0.725);
  color: rgb(34, 15, 238);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>