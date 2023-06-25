

<template>
  <div class="pokemon-card" @mouseover="startAnimation" @mouseout="stopAnimation">
    <div class="card"   :class="{ 'animated': isAnimated }">
      <img :src="pokemon.imageUrl" :alt="pokemon.name" class="pokemon-image" />
      <h3 class="pokemon-name">{{ pokemon.name }}</h3>
      <router-link :to="{ name: 'PokemonDetails', params: { id: pokemon.id } }" class="button">View details</router-link>


    </div>
  </div>
</template>

<script>

export default {
  name: 'PokemonCard',
  //Received property: Pokémon object
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      //card animation
      isAnimated: false,
    };

  },
  methods: {
//Method called when mouse hovers over map
    startAnimation() {
      this.isAnimated = true;
    },
// Method called when mouse leaves map
    stopAnimation() {
      this.isAnimated = false;
    },
  },



};


</script>

<style scoped>
.pokemon-card {
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px;
  color: black;
  background-color: rgb(7, 22, 154);
  margin-top:50px
}

h3{
  font-family:Arial, Helvetica, sans-serif;
  color: #ffea31;
}

.button {
  display: inline-block;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background-color: rgba(153, 240, 95, 0.725);
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.button:hover {
  background-color: #ec5050;
}



.pokemon-image {
  width: 180px;
  height: 180px;
  object-fit: cover;
}

.card {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pokemon-name {
  margin: 0;
  text-align: center;
}



/* small screens */
@media (max-width: 767px) {
  .pokemon-card {
    width: 50%;
    margin: 15px;
    margin-top: 45px;
  }

  .card {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

  
  .pokemon-image {
    width: 150px;
    height: 150px;
  }
  
  .button {
    font-size: 14px;
    padding: 6px 12px;
    margin-top: 15px;
  }
}




/* medium to large screens */
@media (min-width: 768px) {
  .pokemon-card {
    width: 200px;
    margin: 20px;
    margin-top: 50px;
  }
  
  .pokemon-image {
    width: 180px;
    height: 180px;
  }
  
  .button {
    font-size: 15px;
    padding: 8px 16px;
    margin-top: 10px;
  }
}



.animated:hover {
  transform: scale(1.05);
}



</style>