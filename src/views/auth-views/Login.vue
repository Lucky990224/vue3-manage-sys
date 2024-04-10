<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Auths } from '@/store/auth';
import { HttpClient } from "../../components/client";
import app_settings from '../settings';
import axios from 'axios';

alert("url = "+ app_settings.login_url);  
const login_client = new HttpClient(app_settings.login_url);

const router = useRouter();
const auths = Auths();

const isCheckbox = ref(true);
const activeName = ref(1)  // 0：验证码登录；1：密码登录
const act = ref('');
const pwd = ref('');


function handleClick1(){
  activeName.value = 0;
  isCheckbox.value = false; 
  console.log('activeName1 = ' + activeName.value)
}

function handleClick2(){
  activeName.value = 1;
  isCheckbox.value = true; 
  console.log('activeName2 = ' + activeName.value)
}

function onLoginClick(){
  let send_data = {
    username: act.value,
    password: pwd.value
  }

  login_client.post(send_data, {}, (data)=>{
    var para = 'hello world';
    console.log("data.code = " + data.code);
    console.log('msg = ' + data.msg);
    console.log('phone = ' + data.result.userphone);
    if(send_data.username === data.result.username){
      auths.setLogInState(data.result);
      console.log('is = ' + auths.isLogin);
    }
    router.push({name: 'Sign-up', query: {msg: para}});            // vue3 带参跳转 通过命令字段
  }, (error)=>{
    console.log('error');
    console.log(error.status);
    console.log(error.msg);
    alert("error!" + error.msg + 'code' +  error.code + 'error' + error.status  + '\n请重新输入密码');
  }, {"Content-Type": "application/json; charset=UTF-8"})

  //******************************************************************************************************************
  // var para = 'hello world';
  // window.alert("这是一个弹窗提示!"+ para);  
  // router.push('/');                   // vue3 第二种跳转方式 通过路由字段
  // router.push({name: 'home'});            // vue3 第二种跳转方式 通过name字段
  // router.push(`/helloworld`);                   // vue3 第二种跳转方式 通过路由字段
  // router.push(`/helloworld?msg=${para}`);                   // vue3 第二种跳转方式 通过路由字段
  // router.push({name: 'helloworld',params: {msg: para}});            // vue3 带参跳转 通过命令字段
  // router.push({name: 'Sign-up', query: {msg: para}});            // vue3 带参跳转 通过命令字段
  // router.push({path: '/auth/sign-up', query: {msg: para}});            // vue3 带参跳转 通过命令字段
}

function onclick2(){
  console.log('记住账号');
}
function onclick3(){
  console.log('记住账号');
}

function checkedIds(){
  console.log('记住账号');
}

</script>

<template>
  <div id="auth-box">
    <div style="height: 60px;">
      <h3 style="text-align: center;">Login</h3>
    </div>
    <div style="height: 400px;">
      <div style="height: 60px;">
        <button id="handle1" @click="handleClick1">验证码登录</button>
        <button id="handle2" @click="handleClick2">密码登录</button>
      </div>
      <div style="height: 140px;">
        <el-input style="position: relative; left: 30px;width: 320px; height: 40px; top: 20px;"
          size="large" v-model=act  placeholder="账号/邮箱" />
        <el-input style="position: relative; left: 30px;width: 320px; height: 40px; top: 40px"
          type="password" placeholder="输入登录密码" v-model=pwd  minlength="8" maxlength="16" show-password/>
      </div>
      <div style="height: 40px;">
        <label style="position: relative;height: 32px;top: 4px; left: 30px;" v-show=isCheckbox><input type="checkbox"  v-model='checkedIds'>记住账号</label>
        <router-link style="position: relative;top: 4px; left: 200px;" to="/">注册账号</router-link> 
      </div>
      <div style="text-align: center; height: 70px;"><button id="login-button" @click="onLoginClick">登 录</button></div>
      <div style="height: 80px;">
        <router-link style="position: relative; left: 30px;" to="/">跳转首页</router-link> 
        <!-- <router-link style="position: relative;top: 4px; left: 200px;" to="/">注册账号</router-link>  -->
        <el-button style="position: relative;left: 230px;" key="primary" type="primary" primary v-model="onclick3">忘记密码</el-button>
      </div>
    </div>
  </div>
</template>

<style>
#auth-box {
  display:Flexbox;   /* 设置布局 */
  position: absolute;	
  top: 25%;
  right: 10%;
  width: 400px; 
  height: 460px; 
  background: rgb(201, 227, 233);
  box-shadow: 5px 5px 10px #999;
  text-align: left;
  /* z-index: 1; */
}

#handle1 {
  position: relative;
  left: 30px;
  height: 48px;
  width: 40%;
  background: rgb(201, 227, 233);
}

#handle2 {
  position: relative;
  left: 30px;
  height: 48px;
  width: 40%;
  background: rgb(201, 227, 233);
}


#login-button {
  width: 300px;
  height: 50px;
  top: 20px;
  background: #c0b6ff;
  border: 1px solid #f08080;
  border-radius: 10px;
}

</style>
