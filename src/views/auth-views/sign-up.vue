<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { UsersStore } from '../store/user'

const usersStore = UsersStore()



const router = useRoute()
console.log(router.query.msg);
window.alert("这是一个弹窗提示!"+ router.query.msg);  

// query 
let msg = router.query.msg;

const count = ref(0);

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>usersStore.count is: {{ usersStore.count  }}</h2>

  <div class="card">
    <button type="button" @click="usersStore.increment()">usersStore.count ++</button>  
    <button type="button" @click="usersStore.decrement()">usersStore.count --</button>
    <button type="button" @click="usersStore.count = 100">usersStore.count = 100</button>
    <button type="button" @click="usersStore.$reset"> res </button>   
    <!-- 【内置方法】重置 store 的状态 -->
  </div>

  <router-link to="/auth/login">跳转登录页</router-link>
</template>
