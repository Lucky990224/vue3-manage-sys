# Vue3 router的使用

## 安装Vue Router

> 在项目根目录下运行安装Vue Router包：   
  `npm install vue-router -S`  
  -S 是--save的简写。它表示将安装的包信息保存到package.json文件的dependencies字段中


## 路由参数解析

* path：定义路由的路径，可以是字符串或正则表达式。
* name：给路由命名，方便在代码中引用。
* component：指定路由对应的组件。
* meta：定义路由的元数据，可以包含任意自定义的属性，如roles、icon、label等。  
  * title：定义页面/游览器的标题，可以在路由跳转时动态修改页面标题。
  * icon：指定路由在菜单中显示的图标，可以使用图标库的图标名称或者图标的URL。
  * roles：指定路由所需的角色权限，只有具备指定角色的用户才能访问该路由。
  * auth：指定路由是否需要进行身份验证，可以用来控制需要登录才能访问的路由。
  * breadcrumb：指定路由在面包屑导航中的显示文本，用于生成面包屑导航条。
  * keepAlive：指定路由组件是否需要被缓存，以提高页面切换的性能。
  * hidden：指定路由是否在菜单中隐藏，可以用于隐藏不需要在菜单中显示的路由。
  * 其他自定义参数：你可以根据具体的需求定义其他自定义的参数，用于传递额外的信息给路由或路由组件
* redirect：配置重定向，当访问该路由时，自动重定向到指定的路径。
* children：定义子路由，可以嵌套在父路由中，形成路由嵌套的层级结构


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

## 路由嵌套  

* router/index.js
``` 
const routes = [
  {
    path: '/',        // 路由地址：首页
    name: 'Home',     // 命名路由
    component: Home   // 对应的组件
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/views/auth-views/router-layout.vue'),
    redirect: "/auth/login",
    children: auth_routes   // 嵌套的路由
  }
]
```
* views/auth-views/rouer.js
```
// 定义一个路由数组，统一管理路由
const auth_routes = [
  {
    path: 'login',
    name: 'Login',
    component: () => import('@/views/auth-views/Login.vue'),
  },
  {
    path: 'sign-up',
    name: 'Sign-up',
    component: () => import('@/components/HelloWorld.vue'),
  }
]

export default auth_routes
```
* 访问嵌套路由Login时，会先显示 Auth 的组件，然后Auth组件上显示嵌套路由Login组件


## 路由渲染
* 两种方式
  * 第一种  

    ```<RouterView></RouterView>``` 

    基本的用法，它没有任何额外的属性和插槽。<RouterView>会根据当前路由直接渲染对应的组件，没有添加任何额外的逻辑或样式

  * 第二种  
    ```
      <RouterView class="app-router-view" v-slot="{ Component }" v-if="is_router_flash && is_machine_active">
        <Transition>    
          <component :is="Component" />    
        </Transition>    
      </RouterView>  
    ```
    1、插槽：v-slot="{ Component }" 使用了<RouterView>的插槽功能，允许你自定义如何渲染路由对应的组件。在这个例子中，它接收了路由组件作为Component变量。

    2、条件渲染：v-if="is_router_flash && is_machine_active" 使用了Vue的条件渲染指令，只有当is_router_flash和is_machine_active两个变量都为true时，<RouterView>才会渲染。这可以用来控制何时显示路由内容，例如只在某些特定条件下才显示。

    3、过渡动画：<Transition>是Vue提供的用于在元素或组件的插入、更新和移除时应用过渡效果的组件。在这个例子中，它包裹了<component :is="Component" />，意味着当路由组件发生变化时，会应用一个过渡效果。

    4、动态组件：<component :is="Component" /> 是一个动态组件，它的类型（即要渲染哪个组件）由:is属性绑定到Component变量上，这个变量是由<RouterView>插槽提供的

