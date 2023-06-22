<template>
  <div class="app">
    <div class="logo">
      <img src="./assets/pokemonlogo.png" alt="Logo" />
    </div>

    <main>
      <div class="search-container">
        <input v-model="searchKey" type="text" placeholder=" chercher un pokemon" />

        <button @click="search" class="search-button">
          <font-awesome-icon icon="search" />
</button>

<button @click="toggleFilters" class="filter-button">
    Filtre
    <font-awesome-icon :icon="['fas', 'chevron-down']" />
  </button>

      </div>
    </main>
  </div>
</template>

<script>


</script>

<style>
.app{
  background-color: #F17068;
}

.logo{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25vh; 
}
img {
  max-width: 200px;
 
 
}

main {
  padding: 20px;
  margin-bottom: 50px;

}

.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

input[type="text"] {
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
}

.search-button {
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
