import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
//vuetify
import vuetify from './js/vuetify';

const pinia = createPinia()
const app = createApp(App);
app
.use(router)
.use(vuetify)
.use(pinia);

app.mount('#app');
