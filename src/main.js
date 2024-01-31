import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';

const app = createApp(App)  // 创建根组件
app.use(router)             // 注册路由
app.use(createPinia())              
app.use(ElementPlus)
app.mount('#app')  
