<template>
  <div class="pokemon-card">
    <div class="card-header">
      <img :src="pokemon.imageUrl" :alt="pokemon.name" class="pokemon-image" />
    </div>
    <div class="card-body">
      <h3 class="pokemon-name">{{ pokemon.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.pokemon-card {
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  color: black;
  background-color: white;
}

.card-header {
  padding: 10px;
}

.pokemon-image {
  width: 180px;
  height: 180px;
  object-fit: cover;
}

.card-body {
  padding: 10px;
}

.pokemon-name {
  margin: 0;
  text-align: center;
}
</style>
