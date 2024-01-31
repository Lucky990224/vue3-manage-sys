<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function onclick1(){
    var para = 'hello world';
    window.alert("这是一个弹窗提示!"+ para);  
    // router.push('/');                   // vue3 第二种跳转方式 通过路由字段
    // router.push({name: 'home'});            // vue3 第二种跳转方式 通过name字段
    // router.push(`/helloworld`);                   // vue3 第二种跳转方式 通过路由字段
    // router.push(`/helloworld?msg=${para}`);                   // vue3 第二种跳转方式 通过路由字段
    // router.push({name: 'helloworld',params: {msg: para}});            // vue3 带参跳转 通过命令字段
    router.push({name: 'Sign-up', query: {msg: para}});            // vue3 带参跳转 通过命令字段
    // router.push({path: '/auth/sign-up', query: {msg: para}});            // vue3 带参跳转 通过命令字段
    // 带查询参数，变成 /helloworld?msg=hello world
}
</script>

<template>
    <h1>登录页</h1>
    <div class="dowebok">
        <div class="logo"></div>
        <div>
            <input id="username" type="text" autocomplete="off" placeholder="邮箱">
            <p class="tip">请输入合法的邮箱地址</p>
        </div>
        <div>
            <input id="password" type="password" autocomplete="off" placeholder="登录密码">
            <p class="tip">邮箱或密码不正确</p>
        </div>
        <div><button id="submit" @click="onclick1">登 录</button></div>
        <div>
            <router-link to="/">跳转首页</router-link>    <!-- 第一种跳转方式： 跳转首页  -->
            <!-- <a href="#" target="_blank">立即注册</a> -->
            <!-- <a href="#" target="_blank">忘记密码</a> -->
        </div>
    </div>
</template>

<style>
.dowebok {
    position:relative;
    height: 400px;
    width: 300px;
    background-color:aliceblue;
    /* background-color: transparent; */
    border-radius: 10px;
    border: 2px solid white;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
</style>