import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { trpc } from './trpc'

import MainApp from './MainApp.vue'
import router from './router'
import keycloak from "./keycloak"

const app = createApp(MainApp)

app.use(createPinia())
app.use(router)

app.mount('#app')

// @ts-ignore
let resp:any = await trpc.getList.query();
console.log(resp);
// @ts-ignore
resp = await trpc.getUser.query('asdf');
console.log(resp);
try {

    const authenticated = await keycloak.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: `${location.origin}/silent-check-sso.html`,
    });
    if (authenticated) {
        console.log('User is authenticated');
    } else {
        console.log('User is not authenticated, requesting login');
        keycloak.login();
    }
} catch (error) {
    console.error('Failed to initialize adapter:', error);
}
