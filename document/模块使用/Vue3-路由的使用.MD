# Vue3 router的使用

## 安装Vue Router

> 在项目根目录下运行安装Vue Router包：   
  `npm install vue-router -S`  
  -S 是--save的简写。它表示将安装的包信息保存到package.json文件的dependencies字段中

## 创建首页和登录页面
在src中创建views文件夹和Home.vue 以及 Login.vue组件
* Home.vue  
    ```
    <template>
        <h1>首页</h1>
        <p>Hello World</p>
        <router-link to="login">跳转登录页</router-link>
    </template>
    ```

* Login.vue
    ```
    <template>
        <h1>登录页</h1>
    </template>
    ```


## 创建路由配置文件

在src文件下创建router文件夹并在其中创建  index.js，并在其中实现路由配置
```
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
```

## 路由的注册和使用  
* 路由注册：main.js  

    import { createApp } from 'vue'  
    import './style.css'  
    import App from './App.vue'  
    import router from './router'  
  
    const app = createApp(App)  // 创建根组件  
    app.use(router)             // 注册路由  
    app.mount('#app')  

* 路由使用：App.vue
```
    <template>
    <div>
        <router-view></router-view>
    </div>
    </template>
```

## 路由跳转方式  
* router-link   
路由文件：  router/index.js
Home.vue
```
    <template>
        <h1>首页</h1>
        <p>Hello World</p>
        <router-link to="login">跳转登录页</router-link>
    </template>
```

* router.push   

路由文件：  router/index.js  
跳转： login.vue
```
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

function onclick1(){
    var para = 'hello world';
    // router.push('/');                   // vue3 第二种跳转方式 通过路由字段
    // router.push({name: 'home'});          // vue3 第二种跳转方式 通过name字段
    router.push(`/helloworld`);           // vue3 第二种跳转方式 通过路由字段

    // vue3 带参跳转 通过命令字段
    // 带查询参数，变成 /helloworld?msg=hello world
    // router.push({name: 'helloworld', query: {msg: para}});       

    // 不推荐这种带参方式，页面一刷新该方式数据就丢失了【易丢失数据】
    // router.push({name: 'helloworld',params: {msg: para}});       

}
</script>

<template>
    <h1>登录页</h1>
    <div class="dowebok">
        <div class="logo"></div>
        <div>
            <input id="username" type="text" autocomplete="off" placeholder="邮箱">
        </div>
        <div>
            <input id="password" type="password" autocomplete="off" placeholder="登录密码">
        </div>
        <div><button id="submit" @click="onclick1">登 录</button></div>
        <div>
            <router-link to="/">跳转首页</router-link>    <!-- 第一种跳转方式： 跳转首页  -->
        </div>
    </div>
</template>
</style>
```

接收：HelloWorld.vue
 
```
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const router = useRoute()

// query 
let msg = router.query.msg;

// params
// let msg = router.params.msg;


const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

```