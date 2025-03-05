import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import MainApp from './MainApp.vue'
import router from './router'
import keycloak from "./keycloak"

const app = createApp(MainApp)

app.use(createPinia())
app.use(router)

app.mount('#app')

try {
    const authenticated = await keycloak.init();
    if (authenticated) {
        console.log('User is authenticated');
    } else {
        console.log('User is not authenticated');
        keycloak.login();
    }
} catch (error) {
    console.error('Failed to initialize adapter:', error);
}
