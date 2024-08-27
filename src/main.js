import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';
import './index.css'

let app = createApp(App);
app.use(router);
app.mount('#app');
