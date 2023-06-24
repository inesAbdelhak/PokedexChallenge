<template>
    <div>
      <p>This is an empty page.</p>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  export default {
    name: 'PokemonDetails',
    data() {
      return {
        pokemon: null
      };
    },
    created() {
      
      this.fetchPokemonDetails();
    },
    methods: {
        fetchPokemonDetails() {
    const pokemonId = this.$route.params.id;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => {
        this.pokemon = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
    }


    
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques au composant PokemonDetails */
  </style>
  