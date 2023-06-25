import { createRouter, createWebHistory } from 'vue-router';
import PokemonDetails from '../components/PokemonDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/pokemon/:id',
      name: 'PokemonDetails',
      component: PokemonDetails,
    },
  ],
});

export default router;
