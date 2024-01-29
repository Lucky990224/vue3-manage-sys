# Vue3 状态管理 pinia

# pinia 是什么
状态管理：简单来说是一个存储数据的仓库，仓库里的数据所有组件都能进行访问

## 特点

* 兼容vue2和vue3版本
* 删除mutations
* 现不能与vuex 混用
* 支持插件扩展功能
* 支持模块热更新无需加载页面可以修改容器，可以保持任何现有的状态
* 更完美TS支持
* 支持服务端渲染

## 安装
> ` npm install pinia `

## 使用
### 1、main.js 引入Pinia  

```
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)  // 创建根组件
app.use(router)             // 注册路由
app.use(pinia)              
app.mount('#app')  
```

### 2、 数据存储仓库：store  
* 创建数据仓库
创建 store/user.js 数据仓库
```
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
    
  state: () => ({
    count: 0,
  }),

  getters: {

  },

  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
})  
```


getters 和 actions 用于管理状态和执行异步操作；通俗来说 getters中写获取仓库数据的函数，actions写修改参数数据的函数


* store 的操作
```
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { UsersStore } from '../store/user'

const usersStore = UsersStore()
const router = useRoute()

// query 
let msg = router.query.msg;

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>usersStore.count is: {{ usersStore.count  }}</h2>

  <div class="card">
    <button type="button" @click="usersStore.increment()">usersStore.count ++</button>  
    <button type="button" @click="usersStore.decrement()">usersStore.count --</button>
    <button type="button" @click="usersStore.count = 100">赋值：usersStore.count = 100</button>
    <button type="button" @click="usersStore.$reset"> res </button>   
    <!-- 【内置方法】重置 store 的状态 -->
  </div>

  <router-link to="login">跳转登录页</router-link>
</template>

```
