import { createApp } from 'vue'
import './style.css'

// import App from './App/Defer.vue'
// import App from './App/Resize.vue'
// import App from './App/BackTop.vue'
// import App from './App/ComputedModel.vue'
// import App from './App/CustomInput.vue'
// import App from './App/TypeWriter.vue'
// import App from './App/RightClickMenu.vue'
// import App from './App/Watermark.vue'
import App from './App/DebounceInput.vue'

import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

import directives from './directives/index.js'
const app = createApp(App)

// 调用安装指令
app.use(directives)

app.use(ArcoVue)

app.mount('#app')
