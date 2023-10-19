import { createApp } from 'vue'
import './style.css'
// import App from './App/Defer.vue'
import App from './App/Resize.vue'
import directives from './directives/index.js'

const app = createApp(App)

// 调用安装指令
app.use(directives)

app.mount('#app')
