import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import MainApp from './MainApp.vue'
import router from './router'

const app = createApp(MainApp)

app.use(createPinia())
app.use(router)

app.mount('#app')
