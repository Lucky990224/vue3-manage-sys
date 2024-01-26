import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import HelloWorld from '../components/HelloWorld.vue'

// 定义一个路由数组，统一管理路由
const routes = [
  {
    path: '/',        // 路由地址：首页
    name: 'home',     // 命名路由
    component: Home   // 对应的组件
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: HelloWorld
    // props: true  // 启用props传参
  }
  // 其他路由配置...
]

// 使用 createRouter 方法创建路由实例
const router = createRouter({
  history: createWebHistory(), // 指定 history 模式，这里采用的是 hash 模式
  routes // 定义路由数组，相当于 routes: routes 的简写模式
})

router.beforeEach((to, from, next) => {// 在路由跳转前执行的逻辑
  next()
})
  
router.afterEach((to, from) => {
  // 在路由跳转后执行的逻辑
})

// ES6 模块导出语句，它用于将 router 对象导出，以便其他文件可以导入和使用这个对象
export default router