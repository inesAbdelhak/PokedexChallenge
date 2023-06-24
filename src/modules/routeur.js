import { createRouter, createWebHistory } from 'vue-router';

import PokemonDetails from '../components/PokemonDetails.vue';


const routes = [
  { path: '/pokemon/:id', name: 'PokemonDetails', component: PokemonDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

