import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css';
import 'vue3-bootstrap';

createApp(App).use(store).use(router).mount('#app')
