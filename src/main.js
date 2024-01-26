import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)  // 创建根组件
app.use(router)             // 注册路由
app.mount('#app')  
