import { createApp } from 'vue'
import App from './App.vue'
import "./assets/main.css"; // Inkludera CSS-fil
import router from './router/index.js'; // Inkludera router

createApp(App)
    .use(router) // Gör att router fungerar
    .mount('#app')