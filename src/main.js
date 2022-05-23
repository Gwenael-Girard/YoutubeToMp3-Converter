import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

const STATE = {
    off: {
        state: "off",
        msg: ""
    },
    searching: {
        state: "searching",
        msg: "Recherche de la video..."
    },
    downloading: {
        state: "downloading",
        msg: "Conversion en cours..."
    },
    download: {
        state: "download",
        msg: "Conversion terminée !"
    },
    failed: {
        state: "failed",
        msg: "Erreur !"
    },
}

createApp(App).use(store).mount('#app')
