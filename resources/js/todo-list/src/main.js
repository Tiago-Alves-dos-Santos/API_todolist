import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
//vuetify
import vuetify from './js/vuetify';
//swweet alert
import Swal from 'sweetalert2'

const pinia = createPinia()
const app = createApp(App);
app
.use(router)
.use(vuetify)
.use(pinia);

window.check = () => {
    return localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined;
}
window.swAlert = Swal;

app.mount('#app');
