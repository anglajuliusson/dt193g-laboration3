import { createRouter, createWebHistory } from 'vue-router'

// Importerar vyer. Varje view motsvarar en sida.
import HomeView from '../views/HomeView.vue'
import ConcertsView from '../views/ConcertsView.vue'
import InfoView from '../views/InfoView.vue'

// Skapar en router-instans som hanterar navigationen utan att ladda om sidan.
const router = createRouter({

  // Använder web history mode för snygga URL:er utan #
  history: createWebHistory(),

  // routes definierar vilka URL:er som ska visa vilka vyer (components).
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/concerts',
      name: 'concerts',
      component: ConcertsView
    },
    {
      path: '/info',
      name: 'info',
      component: InfoView
    }
  ]
})

// Exporterar routern så att den kan användas i main.js och kopplas till Vue-applikationen.
export default router