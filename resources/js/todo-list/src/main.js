import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//vuetify
import vuetify from './js/vuetify';

const app = createApp(App);
app
.use(router)
.use(vuetify);

app.mount('#app');
