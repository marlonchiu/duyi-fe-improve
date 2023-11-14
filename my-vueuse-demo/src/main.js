import { createApp } from 'vue'
import router from '@/router'
import ArcoVue from '@arco-design/web-vue'
import App from './App.vue'
import './style.css'
import '@arco-design/web-vue/dist/arco.css'

const app = createApp(App)
app.use(ArcoVue)
app.use(router)
app.mount('#app')
