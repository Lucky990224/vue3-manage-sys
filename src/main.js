import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import { PiniaPluginPersist } from 'pinia-plugin-persist';
// import { piniaPluginPersistedstate } from 'pinia-plugin-persistedstate'



const app = createApp(App)  // 创建根组件
// app.config.globalProperties.axios = axios   // 注册前后端交互方法
app.use(router)             // 注册路由
app.use(createPinia())            
// app.use(piniaPluginPersistedstate) // 持久化插件
// app.use(PiniaPluginPersist) // 持久化插件
app.use(ElementPlus)
app.mount('#app')  
