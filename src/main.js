import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';
import routeur from './modules/routeur'


library.add(fas);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(routeur);
app.mount('#app');
